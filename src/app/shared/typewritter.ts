import { Subject } from "rxjs";
type QueueItem = () => Promise<void>;

export class Typewritter {
  queue: QueueItem[] = [];
  typingSpeed: number;
  element: HTMLElement;
  deletingSpeed: number;
  scrollNotificationSubject: Subject<void>;

  constructor(
    element: HTMLElement,
    { typingSpeed = 50, deletingSpeed = 50 } = {},
  ) {
    this.element = element;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.scrollNotificationSubject = new Subject<void>();
  }

  public typeString(string: string): Typewritter {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        let i = 0;
        const interval = setInterval(() => {
          this.element.append(string[i]);
          i++;
          if (i % 30 === 0) {
            this.scrollNotificationSubject.next();
          }
          if (i >= 255) {
            this.element.append(string.slice(i))
            clearInterval(interval);
            resolve();
          } else if (i >= string.length) {
            clearInterval(interval);
            resolve();
          }
        }, this.typingSpeed);
      });
    });
    return this;
  }

  public deleteString(): Typewritter {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          let innerHTML = this.element.innerHTML.slice(0, this.element.innerHTML.length - 1);
          if (innerHTML.length >= 0) {
            this.element.innerHTML = innerHTML;
          } else {
            clearInterval(interval);
            resolve();
          }
        }, this.deletingSpeed);
      });
    });
    return this;
  }
  
  public async start(): Promise<Typewritter> {
    for (let cb of this.queue) {
      await cb();
    }
    return this;
  }
}
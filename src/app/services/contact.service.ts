import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ContactDto } from '../components/contact/contact.types';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClientService) { }

  public submitForm(body: ContactDto): Promise<any> {
    return new Promise((resolve, reject) => {
    const url = environment.apiUrl + "contactme";
      this.httpClient.post(url, body).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    })
  }
}

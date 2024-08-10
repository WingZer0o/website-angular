export class HeaderMenuLink {
    public name!: string;
    public link!: string;
    public iconName!: string;
}

export const headerMenuLinks: HeaderMenuLink[] = [
    {
        name: "Home",
        link: "home",
        iconName: "home",
    },
    {
        name: "About",
        link: "about",
        iconName: "account_circle"
    },
    {
        name: "Contact",
        link: "contact",
        iconName: "contacts"
    }
];
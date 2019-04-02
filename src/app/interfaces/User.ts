export interface IUser {
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        bs: string;
        geo: {
            lat: string;
            lng: string
        };
    };
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;

    };
    email: string;
    name: string;
    id: number;
    phone: string;
    username: string;
    website: string;
}
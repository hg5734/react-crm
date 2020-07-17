export interface LoginInterface {
    email: string;
    password: string;
}

export interface IUserInformation {
    token: string;
    email: string;
    role: string;
    name: string;
}

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface Lead {
    clientEmail: string;
    clientName: string;
    clientPhone: string;
}
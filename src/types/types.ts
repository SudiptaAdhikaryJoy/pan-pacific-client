export type RegistrationForm = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string,
}

export type LoginForm = {
    email: string,
    password: string,
}

export interface logoType {
    logo: string;
}
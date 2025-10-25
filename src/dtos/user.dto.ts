export interface IUserCreateDTO {
    name: string;
    email: string;
    password: string;
    userType: 'admin' | 'user';
}

export interface IUserLoginDTO {
    email: string;
    password: string;
}

export interface IModel {
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface User extends IModel {
    email: string;
    fullName: string;
}
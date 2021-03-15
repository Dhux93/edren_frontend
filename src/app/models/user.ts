import { ResolveStart } from "@angular/router";
export type Roles = 'user_free' | 'user_premium' | 'admin' | 'secretary' | 'any'

export interface User {
    pais:string;
    idioma:string;
    email:string;
    usuario:string;
    password:string;
    role:string;
}
export interface UserTable {
    id:number;
    Pais:string;
    Idioma:string;
    Email:string;
    Usuario:string;
    Role:string;
}

export interface UserLogin {
    email: string; 
    password: string;
}

export interface UserResponse{
    message: string;
    token: string;
    userId: number;
    role: Roles;
    
}
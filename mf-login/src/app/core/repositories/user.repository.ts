import { Observable } from "rxjs";
import { UserModel } from "../domain/user.model";

export abstract class UserRepository {
    // abstract login(params: {username: string, password: string}): Observable<UserModel>;
    // abstract register(params: {phoneNum: string, password: string}): Observable<UserModel>;
    abstract getUsers(): Observable<UserModel[]>;
    abstract getUserById(id: number): Observable<UserModel>;
  }
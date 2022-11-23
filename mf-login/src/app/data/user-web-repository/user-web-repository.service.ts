import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { UserModel } from "src/app/core/domain/user.model";
import { UserRepository } from "src/app/core/repositories/user.repository";
import { UserWebRepositoryMapper } from "./user-web-repository.mapper";
import { UserWebEntity } from "./user-web.entity";

@Injectable({ providedIn: 'root'})
  //

export class UserWebRepositoryService extends UserRepository {

  private mapper = new UserWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<UserModel[]> {
    return this.http
      .get<UserWebEntity[]>('https://jsonplaceholder.typicode.com/users')
      // .pipe(mergeMap((item) => item))
      .pipe(map( res => this.mapper.createFromObjects(res)));
  }

  getUserById(id: number): Observable<UserModel> {
    // throw new Error('Method not implemented.');
    return this.http
      .get<UserWebEntity>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

}
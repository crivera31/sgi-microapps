import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class MockService {

    constructor(private http: HttpClient) {}

    getMock(): Observable<any> {
        return this.http.get('assets/data.json');
    }

}
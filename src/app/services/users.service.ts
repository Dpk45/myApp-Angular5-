import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class UsersService {
	 constructor(private http:HttpClient) {}

	 // Uses http.get() to load data from a single API endpoint
    getUsers() {
        return this.http.get('http://localhost:8000/api/1.0/allUsers');
    }

    createUser(data: any){console.log("in create user service fe..")
    	return this.http.post('http://localhost:8000/api/1.0/user', data, httpOptions).map((res: any) => {
                return res;
            });
    }
    
    getUserByName(){
        return this.http.get('http://localhost:8000/api/1.0/allUsers');
    }
}
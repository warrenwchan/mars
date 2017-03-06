import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Aliens } from '../models';
import { ALIENS_URL } from '../models/API';

@Injectable()
export class AlienAPIService {

     constructor(private http: Http) {}

     getMarsAliens(): Observable<Aliens[]> {
        return this.http.get(ALIENS_URL)
                .map((res: Response) => res.json().aliens);
    }
}
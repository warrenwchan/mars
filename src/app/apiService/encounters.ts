import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ENCOUNTER_URL } from '../models/API';
import { Encounter, NewEncounter } from '../models';

interface EncounterPostRequest {
    encounter : NewEncounter;
}


@Injectable()
export class EncounterAPIService {

    
     constructor(private http: Http) {}

     getEncounter(): Observable<Encounter[]> {
        return this.http.get(ENCOUNTER_URL)
                        .map((res:Response) => {
                            return res.json().encounters});
    }
    saveEncounter(newEncounter: EncounterPostRequest): Observable<Encounter> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const mappeddata = this.http.post(ENCOUNTER_URL, newEncounter, { headers })
                        .map((res: Response) => res.json().encounter);
        
        return mappeddata
 }
}
import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models/index';
import { EncounterAPIService } from '../apiService/encounters';
import { ENCOUNTER_URL } from '../models/API';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
  providers: [EncounterAPIService]
})
export class EncounterComponent implements OnInit {

  encounter: Encounter[];


  constructor(
    private encounterAPIService: EncounterAPIService
    ) {
      this.getEncounter();
    }

  getEncounter() {
    this.encounterAPIService.getEncounter()
                            .subscribe((result) => {
                              this.encounter = result;
                              console.log(result);
                            });
  }
  ngOnInit() {
  }
}

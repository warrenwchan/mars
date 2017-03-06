import { Component, OnInit } from '@angular/core';
import { NewEncounter, Aliens } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ALIENS_URL, ENCOUNTER_URL } from '../models/API';
import { AlienAPIService } from '../apiService/aliens';
import { EncounterAPIService } from '../apiService/encounters';
import { Router } from '@angular/router';

@Component({
	selector: 'app-report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.scss'],
	providers: [EncounterAPIService, AlienAPIService]
})
export class ReportComponent implements OnInit {

	marsAliens: Aliens[];
	reportForm; FormGroup;
	clickedButton: boolean;

	constructor(
		private encounterApiService: EncounterAPIService,
		private alienAPIService: AlienAPIService,
		private router: Router
	) {

		this.getMarsAliens()

		this.reportForm = new FormGroup({
			atype: new FormControl('', [Validators.required,]),
			action: new FormControl('', [Validators.required, Validators.maxLength(150)]),
		});
	}

	ngOnInit() {

	}

	getMarsAliens() {
		this.alienAPIService.getMarsAliens()
							.subscribe((result) => {
							this.marsAliens = result;
							});
	}

	postNewEncounter(event) {
		event.preventDefault();
		if(this.reportForm.invalid) {
			// if the form is invalid...
			this.clickedButton = true;
		} else {
			const atype = this.reportForm.get('atype').value; 
			const date = '2016-11-18';
			const colonist_id = '4';
			const action = this.reportForm.get('action').value;
			const newEncounter: NewEncounter = new NewEncounter(atype, date, action, colonist_id);
			const encounterPostRequest = { encounter: newEncounter };

			this.encounterApiService.saveEncounter( encounterPostRequest )
									.subscribe((result) => {
									console.log('Encoubnter Logged..', result)
									this.router.navigate(['encounters']);
			})
			
		}
	}
}

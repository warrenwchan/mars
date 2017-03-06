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
		localStorage.setItem('test', 'tom')

	}

	getMarsAliens() {
		this.alienAPIService.getMarsAliens()
							.subscribe((result) => {
							this.marsAliens = result;
							});
	}

	  getEncounterDate() {
		const today = new Date();
	
		return `${ today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() }`;
		}; 

	postNewEncounter(event) {
		event.preventDefault();
		if(this.reportForm.invalid) {
			// if the form is invalid...
			this.clickedButton = true;
		} else {
			const atype = this.reportForm.get('atype').value; 
			const action = this.reportForm.get('action').value;
			const newEncounter: NewEncounter = new NewEncounter(atype, this.getEncounterDate(), action, localStorage.getItem('colonist_id'));
			const encounterPostRequest = { encounter: newEncounter };

			this.encounterApiService.saveEncounter( encounterPostRequest )
									.subscribe((result) => {
									console.log('Encoubnter Logged..', result);
									
									localStorage.setItem('colonist_id',result.id.toString()); 
									this.router.navigate(['encounters']);
			})
			
		}
	}
}

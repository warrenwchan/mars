import { Component, OnInit } from '@angular/core';
import { NewEncounter, Aliens } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  newEncounter: NewEncounter;
  marsAliens: Aliens[];
  reportForm; FormGroup;

  constructor() { 

    this.marsAliens = [
      {
        type:'Special K',
        submitted_by:'1',
        id:1,
        description:'Special'
      }
    ];
    

    this.reportForm = new FormGroup({
      atype: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      action: new FormControl('',[Validators.required]),
      colonist_id: new FormControl('',[Validators.required])
    });
  }

  logEncounter() {
    console.log(this.reportForm);
  }

  ngOnInit() {
  }

}

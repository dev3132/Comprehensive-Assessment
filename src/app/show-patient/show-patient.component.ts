import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  
  patients:any;
  
  age: number=0;


  

  patientId:number=0;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  getPatient(){
    return this.patientService.getPatientById(this.patientId).subscribe(data =>{
      
    })
  }
}

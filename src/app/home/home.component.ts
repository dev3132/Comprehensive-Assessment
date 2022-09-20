import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { Patient } from '../patient';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mySpan: boolean=false;

  listDoctors: Doctor[]=[];

  patient: Patient=new Patient();

  constructor(private doctorService: DoctorService,private pattientService: PatientService) { }

  ngOnInit(): void {
    this.getDoctorsList();
    
   }
   private getDoctorsList(){
     this.doctorService.getAllDoctors().subscribe(data =>{
       this.listDoctors = data;
     })
   }

   savePatient(){
     this.pattientService.createPatient(this.patient).subscribe(data =>{
       console.log(data);
     },
     error => console.log(error));
     
   }







   onSubmit(){
    console.log(this.patient);
    this.savePatient();
   }
  

   list: any=[];
   docSelected: string='select doctor';
    
   
   dateSelect: any;
   fetchDate(){
     console.log(this.dateSelect);
   }
   public selectedDoctor: string='';

   onSelect(){
    
   }


  }

  


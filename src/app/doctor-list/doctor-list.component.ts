import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { RouterModule } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  

  doctors: string[]=[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
   this.getDoctorsList();
  }
  private getDoctorsList(){
    this.doctorService.getDoctorsList().subscribe(data =>{
      this.doctors = data;
      
    })
  }

  onChange(){
    
  }
  
}

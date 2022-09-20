import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  // private baseURL = "http://localhost:7001/doctor/";
  private baseURL = "http://localhost:7001/doctor";


  constructor(private httpClient: HttpClient) { }

  getDoctorsList():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseURL}`+"/doctor-name");
  }

  getDoctorById(doctorId:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}`+"/doctorId");
  }
  getAllDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`+"/");
  }
}

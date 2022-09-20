import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:7002/patient/";

  constructor(private httpClient: HttpClient) { }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,patient);
  }

  getPatientById(patientId: number): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,patientId);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logg } from './model/Securitehama';

@Injectable({
  providedIn: 'root'
})
export class HamoudaServService {

  constructor(private httpHamouda: HttpClient) { }

  getAllUseres(): Observable<Logg> {
  return this.httpHamouda.get<Logg>("https://localhost:8475/getAllUseres");
}

addUser(logss: Logg): Observable<object> {
  return this.httpHamouda.post("https://localhost:8475/addUser", logss);
}


updateUser(logss: Logg): Observable<object> {
  return this.httpHamouda.put("https://localhost:8475/updateUser ", logss);

}

deleteUserByID(id: number): Observable<object> {
  return this.httpHamouda.delete('https://localhost:8475/removeUser/'+id);

}

authentification(email : string , password :string): Observable<Logg> {
  return this.httpHamouda.get<Logg>("https://localhost:8475/authentification/"+email+"/"+password);
}

}
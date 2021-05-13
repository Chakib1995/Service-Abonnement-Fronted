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
  return this.httpHamouda.get<Logg>("http://localhost:8479/getAllUseres");
}

addUser(logss: Logg): Observable<object> {
  return this.httpHamouda.post("http://localhost:8479/addUser", logss);
}


updateUser(logss: Logg): Observable<object> {
  return this.httpHamouda.put("http://localhost:8479/updateUser ", logss);

}

deleteUserByID(id: number): Observable<object> {
  return this.httpHamouda.delete('http://localhost:8479/removeUser/'+id);

}

authentification(email : string , password :string): Observable<Logg> {
  return this.httpHamouda.get<Logg>("http://localhost:8479/authentification/"+email+"/"+password);
}

}
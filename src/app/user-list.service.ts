import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assu } from './model/assu';
import { Bank } from './model/bank';
import { Contrat } from './model/contrat';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
 constructor(private httpClient: HttpClient) { }
//////////////////////////user/////////////////////////
 
  getAllEmployes(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8479/User/getAllUser");
  }

  addUser(userss: User): Observable<object> {
    return this.httpClient.post("http://localhost:8479/User/addBank", userss);
  }


  updateUser(userss: User): Observable<object> {
    return this.httpClient.put("http://localhost:8479/User/updateUser", userss);

  }

  deleteUserByID(id: number): Observable<object> {
    return this.httpClient.delete('http://localhost:8479/User/deleteUser/'+id);

  }
/////////////////////////BANK//////////////////////////////
getAllBanks(): Observable<Bank[]> {
  return this.httpClient.get<Bank[]>("http://localhost:8479/Bank/getAllBanks");
}

addBank(bankss: Bank): Observable<object> {
  return this.httpClient.post("http://localhost:8479/Bank/addBank", bankss);
}


updateBank(bankss: Bank): Observable<object> {
  return this.httpClient.put("http://localhost:8479/Bank/updateBank", bankss);

}

deleteBankByID(id: number): Observable<object> {
  return this.httpClient.delete('http://localhost:8479/Bank/deleteBank/'+id);
}
/////////////////////////Assurence//////////////////////////////
getAllAssurances(): Observable<Assu[]> {
  return this.httpClient.get<Assu[]>("http://localhost:8479/Assurance/getAllAssurances");
}

addAssurance(assuss: Assu): Observable<object> {
  return this.httpClient.post("http://localhost:8479/Assurance/addAssurance", assuss);
}
/////////////////////////abonnement//////////////////////////////
showContracts(): Observable<Contrat[]> {
  return this.httpClient.get<Contrat[]>("http://localhost:8479/algoCard/Contracts");
}

abonnement(): Observable<Contrat[]> {
  return this.httpClient.get<Contrat[]>("http://localhost:8479/algoCard/abonnement");
}
   
/////////////////////////hmimida///////////////////////////////////////


}
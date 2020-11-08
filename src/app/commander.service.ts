import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {
  readonly APIUrl = "https://localhost:44339/api";

  constructor(private http:HttpClient) { }

  //Get command by id
  getCommandById(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl+'/commands', val)
  }

  //Get all commands
  getCommandsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/commands')
  }

  //Add new command
  addCommand(val:any){
    return this.http.post(this.APIUrl+'/commands', val)
  }

  //Update command
  updateCommand(val:any){
    return this.http.patch(this.APIUrl+'/commands', val)
  }

  //Delete command
  deleteCommand(val:any){
    return this.http.delete(this.APIUrl+'/commands', val)

  }
}

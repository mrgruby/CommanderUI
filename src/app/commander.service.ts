import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {
  readonly APIUrl = "https://localhost:44339/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

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

  //Update command return this.http.put<BlogPost>(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(blogPost), this.httpOptions)
  updateCommand(id:string, val:any){
    //return this.http.put(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(blogPost)
    return this.http.put(this.APIUrl+'/commands/'+id, val)
  }

  //Delete command
  deleteCommand(val:any){
    return this.http.delete(this.APIUrl+'/commands', val)

  }
}

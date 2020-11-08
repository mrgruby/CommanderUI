import { Component, OnInit } from '@angular/core';
import {CommanderService} from 'src/app/commander.service'

@Component({
  selector: 'app-show-command',
  templateUrl: './show-command.component.html',
  styleUrls: ['./show-command.component.css']
})
export class ShowCommandComponent implements OnInit {

  constructor(private service:CommanderService) { }

  CommandsList:any[];

  ngOnInit(): void {
    this.refreshCommandsList();
  }

  //subscribe ensures that data is not added to the list before
  //a response is recieved from the API. This is an async operation
  refreshCommandsList(){
    this.service.getCommandsList().subscribe(data=>{
      this.CommandsList = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {CommanderService} from 'src/app/commander.service';

@Component({
  selector: 'app-show-command',
  templateUrl: './show-command.component.html',
  styleUrls: ['./show-command.component.css']
})
export class ShowCommandComponent implements OnInit {

  constructor(private service:CommanderService) { }

  CommandsList:any[];
  //These three variables are used in the add-edit modal.
  ModalTitle:string;
  ActivateAddEditCommandComp:boolean;
  command:any;

  ngOnInit(): void {
    this.refreshCommandsList();
  }

  addClick(){
    this.command={
      Id:0,
      HowTo:"",
      Line:"",
      Platform:"",
      Comment:""
    }
    this.ModalTitle="Add new command";
    this.ActivateAddEditCommandComp=true;
  }

  closeClick(){
    this.ActivateAddEditCommandComp= false;
    this.refreshCommandsList();
  }

  editClick(item){
    this.command=item;
    this.ModalTitle="Edit Command";
    this.ActivateAddEditCommandComp = true;
  }

  //subscribe ensures that data is not added to the list before
  //a response is recieved from the API. This is an async operation
  refreshCommandsList(){
    this.service.getCommandsList().subscribe(data=>{
      this.CommandsList = data;
    });
  }
}

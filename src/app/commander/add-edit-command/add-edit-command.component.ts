import { Component, Input, OnInit} from '@angular/core';
import {CommanderService} from 'src/app/commander.service';

@Component({
  selector: 'app-add-edit-command',
  templateUrl: './add-edit-command.component.html',
  styleUrls: ['./add-edit-command.component.css']
})
export class AddEditCommandComponent implements OnInit {

  constructor(private service:CommanderService) { }

  @Input() command:any;
  Id:string;
  Line:string;
  HowTo:string;
  Comment:string;
  Platform:string;

  ngOnInit(): void {
    this.Id = this.command.id;
    this.Line = this.command.line;
    this.HowTo = this.command.howTo;
    this.Comment = this.command.comment;
    this.Platform = this.command.platform;
  }

  addCommand(){
    var val = {
      Id:this.Id,
      HowTo:this.HowTo,
      Line:this.Line,
      Platform:this.Platform,
      Comment:this.Comment,
    };
    this.service.addCommand(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCommand(){
    var val = {
      id:this.Id,
      howTo:this.HowTo,
      line:this.Line,
      platform:this.Platform,
      comment:this.Comment,
    };
    this.service.updateCommand(val.id, val).subscribe(res=>{
      alert(res.toString());
    });
  }

}

import {Component, OnInit} from '@angular/core';


@Component({
  selector : 'app-list',
  templateUrl : './list.component.html',
  styleUrls: ['./list.component.css']
})


export class listComponent implements OnInit{


  listName="";
  listCreated=false;
  list=[];
  constructor(){

  }
  ngOnInit(){

  }
  onCreatelist(){
    this.listCreated=true;
    this.list.push(this.listName);

}
  onUpdatelist(event: Event){

    this.listName= (<HTMLInputElement>event.target).value;
}
}

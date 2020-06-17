import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  famille = [
    {
      nom: "yassine",
      prenom: "jallouli",
      phone: "53522793",
      pays: {
        street: "nahj salah farhat",
        zip: "2039",
      }
    },

    {
      nom: "salah",
      prenom: "jallouli",
      phone: "53522793",
      pays: {
        street: "nahj salah farhat",
        zip: "2039",
      }
    },
    {
      nom: "blala",
      prenom: "jallouli",
      phone: "53522793",
      pays: {
        street: "nahj salah farhat",
        zip: "2039",
      }
    },
    {
      nom: "fuckit",
      prenom: "jallouli",
      phone: "53522793",
      pays: {
        street: "nahj salah farhat",
        zip: "2039",
      }
    }
  ]
  delete(membreFamille){
    let index = this.famille.indexOf(membreFamille);
    this.famille.splice(index , 1 )
  }
  isError = true;
  constructor() { }

  ngOnInit(): void {
  }
  tab : Array <String> = ['yassine','ali','salah','yassine'];
  deletM(membre : String , index : number){
    console.log(index);
    this.tab.splice(index, 1);
    
  }
}
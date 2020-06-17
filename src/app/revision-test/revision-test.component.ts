import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-test',
  templateUrl: './revision-test.component.html',
  styleUrls: ['./revision-test.component.scss']
})
export class RevisionTestComponent implements OnInit {
  TF = true ;
abed : Array <String> =['yassine','yossr','mayssa'];

employe = [
  { id : 1,
    firstname : "yassine",
    lastname :"jallouli",
    phone : "53522793"
  },
  {id : 2,
    firstname : "salah",
    lastname :"jileni",
    phone : "22789563"
  },
  {id : 3,
    firstname : "imed",
    lastname :"mounir",
    phone : "25789533"
  },
  { id : 1,
    firstname : "yassine",
    lastname :"jallouli",
    phone : "53522793"
  },
]

delet(j){
  let index = this.employe.indexOf(j);
  this.employe.splice(index , 1);
}

  constructor() { }

  ngOnInit(): void {
  }

}

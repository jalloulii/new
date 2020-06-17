import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tableau-alet',
  templateUrl: './tableau-alet.component.html',
  styleUrls: ['./tableau-alet.component.scss']
})
export class TableauAletComponent implements OnInit {
  public myform: FormGroup;
  constructor(private fb: FormBuilder) {
    let formControls = {
      email: new FormControl("",[
        Validators.required,
      ]),
    }
    this.myform = fb.group(formControls);
  }

  getUser(){
    console.log(this.myform.value);
  }


  ngOnInit(): void {
  }



























  tab2: Array<String> = ['mounir', 'med', 'bouras', 'mounir', 'mostfa', 'mounir'];
  tab = [
    {
      nom: "yassine",
      prenom: "jallouli",
      age: "18",
      city: "tunis"
    },
    {
      nom: "imeed",
      prenom: "kadechi",
      age: "18",
      city: "tunis"
    },
    {
      nom: "mongi",
      prenom: "mnejja",
      age: "18",
      city: "tunis"
    },
  ]
  delet(x) {
    let index = this.tab.indexOf(x);
    this.tab.splice(index, 1)
  }
  delet2(elemTab: String, index: number) {
    this.tab2.splice(index, 1);
  }
}

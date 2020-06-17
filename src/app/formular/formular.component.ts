import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})

export class FormularComponent implements OnInit {
  private myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    let myFormControlls = {
      nom: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z a-z-'.]+"),
        Validators.minLength(2),
      ]),
    }
    this.myForm = fb.group(myFormControlls);
  }

  sendUser() {
    let a = this.myForm.value;
    console.log(a);
  }
  ngOnInit(): void {
  }

  get nom() { return this.myForm.get('nom'); }

}

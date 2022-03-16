import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  interestsArr = new FormArray([]);
  formVal: FormGroup;
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formVal = new FormGroup({
      name: new FormControl('test', Validators.required),
      emailID: new FormControl('test@gmail.com'),
      interests: this.interestsArr,
    });
  }

  OnSubmit() {
    console.log(this.formVal.value);
    console.log(this.formVal.value.interests[0]);
    console.log(this.formVal.value.name);
    console.log(this.formVal.value.emailID);
  }
  AddnewSubjects() {
    this.interestsArr.push(
      new FormGroup({
        Subject1: new FormControl(''),
        Subject2: new FormControl(''),
      })
    );
  }

  get SubjectList(): FormArray {
    return this.formVal.get('interests') as FormArray;
  }
}

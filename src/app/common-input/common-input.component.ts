import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss']
})
export class CommonInputComponent implements OnInit{
  registraionForm !: FormGroup
constructor(private formBuilder : FormBuilder){
  
}


// FormControl store validators
control?: FormControl;

ngOnInit() {

  this.registraionForm = this.formBuilder.group(
    {
  firstName : [''],
  lastName : [''],
  education: this.formBuilder.group({
subject:[''],
rollNo :[''],
  }),
  hobbies: this.formBuilder.array([
    this.formBuilder.control('')
  ])
    })
 
}
get controlName(){
  return this.registraionForm.controls;
}
get hobbies() {
  return this.registraionForm.get('hobbies') as FormArray;
}
addHobbies() {
  this.hobbies.push(this.formBuilder.control(''));
}
removeHobbies(index :number){
  this.hobbies.removeAt(index);

}
onSubmit(){
  console.log(this.registraionForm.value)
}
}

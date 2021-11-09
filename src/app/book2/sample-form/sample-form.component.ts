import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    year_written: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bookForm.value)
  }

  get title() {
    return this.bookForm.get('title');
  }

  get year_written() {
    return this.bookForm.get('year_written');
  }

  // function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

  //   if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
  //       return { 'ageRange': true };
  //   }
  //   return null;
}



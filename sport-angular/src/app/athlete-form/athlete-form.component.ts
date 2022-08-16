import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.css']
})

export class AthleteFormComponent implements OnInit {
  constructor() { }
  //profiles: FormGroup[] = []; 
  oppoSports: any = ['Basketball', 'Football', 'Tennis', 'Golf']
  textOutput = '';

  profileForm = new FormGroup({
    athleteName: new FormControl(''),
    sport: new FormControl(''),
    active: new FormControl('')
  });

  changeForm(e: any) {
     console.log(e);
  }

  onSubmit( event: Event){
    event.preventDefault();
    //this.profiles.push(this.profileForm);
    this.textOutput += "* "
    this.textOutput += this.profileForm.value.athleteName + " ";
    this.textOutput += "(" + this.profileForm.value.sport + ") ";
    this.textOutput += this.profileForm.value.active ? "is active" : "is not active";
    this.textOutput += "\n"
  }

  ngOnInit(): void {
  }
}

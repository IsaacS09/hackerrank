import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../types/Item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})

export class DataForm implements OnInit {

  userData: FormGroup;

  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    this.userData = this.fb.group({
      name: [''],
      genre: [''],
      creator: [''],
      typeForm: this.fb.group({
        type: ['', Validators.required]
      }),
      totalTime: [''],
    })
  
  }

  addUser(data: Item) {
    if(this.userData.invalid) {
      return;
    }
    this.onItemAdded.emit(data);
    this.userData.reset();
  }

}

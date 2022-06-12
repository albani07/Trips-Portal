import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private contactService: ContactService) { 
    
  }

  

  ngOnInit(): void {
  }

  onSend(){

    console.warn(this.contactForm.value);

    this.contactService.create(this.contactForm.value);
  }  

}

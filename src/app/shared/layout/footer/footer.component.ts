import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import { faLeaf, faEnvelope, faArrowRightFromBracket,
 } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLeaf = faLeaf;
  faEnvelope = faEnvelope;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;



  

  constructor() { }

  ngOnInit(): void {
  }

  
  popup:any = document.getElementById("popup");
  sub = false
  
  openPopup() {
      this.popup.classList.add("open-popup");

      alert('hii')
     
    }
     closePopup() {
      this.popup.classList.remove("open-popup");
     
    }
}







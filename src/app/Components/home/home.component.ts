import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products:any=[
  {
    imgSrc:"../../../assets/images/mobile.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:90,
    rate:3,
    offer:false
  },
  {
    imgSrc:"../../../assets/images/mobile2.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:2,
    offer:false
  },
  {
    imgSrc:"../../../assets/images/tshirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:3,
    offer:false
  },
  {
    imgSrc:"../../../assets/images/shirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:4,
    offer:true
  },
  {
    imgSrc:"../../../assets/images/pinkBlouse.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:4,
    offer:false
  },
]

}

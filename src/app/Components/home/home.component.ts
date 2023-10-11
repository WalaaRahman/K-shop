import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products:any=[
  {
    imgSrc:"mobile.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:90,
    rate:3,
    offer:false
  },
  {
    imgSrc:"mobile2.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:2,
    offer:false
  },
  {
    imgSrc:"tshirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:3,
    offer:false
  },
  {
    imgSrc:"shirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:4,
    offer:true
  },
  {
    imgSrc:"pinkBlouse.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    rate:4,
    offer:false
  },
]

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products:any=[
  {id:1,
    imgSrc:"../../../assets/images/mobile.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:90,
    offer:false
  },
  {
    id:2,
    imgSrc:"../../../assets/images/mobile2.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:120,
    offer:false
  },
  {
    id:3,
    imgSrc:"../../../assets/images/tshirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:80,
    offer:false
  },
  {
    id:4,
    imgSrc:"../../../assets/images/shirt.png",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
    price:70,
    offer:true
  },
  // {
  //   imgSrc:"../../../assets/images/pinkBlouse.png",
  //   description:"تيشيرت-كم طويل-آرت وير-نسائى-صيفى",
  //   price:80,
  //   rate:4,
  //   offer:false
  // },
]

}

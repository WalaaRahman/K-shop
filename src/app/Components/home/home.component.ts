import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLable:boolean = true;
  hoverOverProduct:any= null;

products:any=[
  {id:1,
    imgSrc:"../../../assets/images/mobile.png",
    title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    price:90,
    offer:false
  },
  {
    id:2,
    imgSrc:"../../../assets/images/mobile2.png",
    title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    price:120,
    offer:false
  },
  {
    id:3,
    imgSrc:"../../../assets/images/tshirt.png",
    title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    price:80,
    offer:false
  },
  {
    id:4,
    imgSrc:"../../../assets/images/shirt.png",
    title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
    price:70,
    previousPrice:125,
    offer:true
  }
  
]


// lastSeenProducts:any=[
//   {id:1,
//     imgSrc:"../../../assets/images/pinkBlouse.png",
//     title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:90,
//     offer:false
//   },
//   {
//     id:2,
//     imgSrc:"../../../assets/images/necklace.png",
//     title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:120,
//     previousPrice:250,
//     offer:true
//   },
//   {
//     id:3,
//     imgSrc:"../../../assets/images/girlsTshirt.png",
//     title:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:80,
//     offer:false
//   }
// ]
// lastSeenProductsIds:any []=[];
lastSeenProducts:any []=[];
lastSeenThreeProducts:any []=[];


 toggleHover (id:any){
this.hoverOverProduct = id;
}
removeHover(){
this.hoverOverProduct = null;

}
addToLastSeen(id:any){

  this.lastSeenProducts.push(this.products[id-1]);
  console.log(this.lastSeenProducts);
  this.lastSeenThreeProducts=this.lastSeenProducts.slice(Math.max(this.lastSeenProducts.length - 3, 0))
}
}

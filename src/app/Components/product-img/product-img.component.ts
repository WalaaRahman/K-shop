import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent {
  showLable:boolean = true;
  hoverOverProduct:any= null;
@Input() product:any;

// products:any=[
//   {id:1,
//     imgSrc:"../../../assets/images/mobile.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:90,
//     offer:false
//   },
//   {
//     id:2,
//     imgSrc:"../../../assets/images/mobile2.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:120,
//     offer:false
//   },
//   {
//     id:3,
//     imgSrc:"../../../assets/images/tshirt.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:80,
//     offer:false
//   },
//   {
//     id:4,
//     imgSrc:"../../../assets/images/shirt.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:70,
//     previousPrice:125,
//     offer:true
//   },
//   {id:5,
//     imgSrc:"../../../assets/images/mobile.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:90,
//     offer:false
//   },
//   {
//     id:6,
//     imgSrc:"../../../assets/images/mobile2.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:120,
//     offer:false
//   },
//   {
//     id:7,
//     imgSrc:"../../../assets/images/tshirt.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:80,
//     offer:false
//   },
//   {
//     id:8,
//     imgSrc:"../../../assets/images/shirt.png",
//     description:"تيشيرت-كم طويل-آرت وير-نسائى-نسائى",
//     price:70,
//     previousPrice:125,
//     offer:true
//   },
// ]


 toggleHover (id:any){
this.hoverOverProduct = id;
}
removeHover(){
this.hoverOverProduct = null;

}
}

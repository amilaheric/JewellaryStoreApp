import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products: Product[] = [];
  productsChanged = new Subject<Product[]>();
  constructor() {
    this.products = [
    new Product(101,'Timeless Wish Half Sparkling',310,'Make all your wishes come true with this delicate Sparkling Wishbone Ring, half-lined with 12 claw-set round brilliant-cut cubic zirconia stones on a 14k rose gold-plated band. Simple yet elegant, this wishbone-shaped ring can be worn on its own as a shimmering statement, or paired with other Pandora stackable rings to create a unique, highly individual look.','../assets/rings.png'),
    new Product(102,'Sparkling Freehand Star ',144,'Our freehand heart symbolizes perfectly imperfect real love and inspires us to think of those in our lives who represent this for us. This pendant necklace gives the chance to wear your freehand heart front and center, a fresh and interesting take on the classic heart motif. In sterling silver and featuring 27 brilliant-cut clear cubic zirconia, these necklaces are designed to be stacked so wear two or three or layer with your existing necklaces.','../assets/necklace.png'),
    new Product(103,'Red Round Sparkling Hoop Earrings',206,'A gift filled with love, our Red Round Sparkling Hoop Earrings each feature a round brilliant-cut cherry-red man-made crystal dangle surrounded by a pavé halo. The pavé on the hoop is accented with round clear cubic zirconia. Team them with a matching charm or ring to make a colorful statement fit for any occasion.','../assets/earring.png'),
    new Product(104,'Sparkling Herbarium',206,'Bring the beauty of nature to your jewelry with our Sparkling Herbarium Cluster Stud Earrings. These 14k rose gold-plated studs feature a cluster of alternating pear and marquise-shaped stones around a round center stone, forming a geometric shape inspired by petal and leaf elements. An elegant reinterpretation of the shapes we find in nature, these sparkling studs are perfect for bringing a delicate, floating feel to your everyday looks.','../assets/earr2.png'),
    new Product(105,'Sparkling Elevated Ring',144,'Add a sophisticated edge to your look with the Sparkling Elevated Heart Ring. The ring draws inspiration from the classic Timeless collection. Hand-finished in 14k rose gold plating, this piece features a clear heart-shaped central, elevated stone. Clear stones create the halo and decorate half of the ring band, with the Pandora logo on the inside of the shank. Stack this ring with hand-finished styles in sterling silver for a statement mixed metal look.','../assets/rose.png'),
    new Product(106,'Square Sparkle Halo Ring',75,'This stunning vintage-inspired ring is one youll treasure forever. Crafted in sterling silver, this sophisticated style is embellished with sparkling cubic zirconia stones and features a large, square-cut stone as the centerpiece. Wear it on its own as a statement cocktail ring, or style it with contrasting Pandora rings for a fresh, contemporary look.','../assets/square.png'),
    new Product(107,'Sparkling Row Eternity Ring',115,'Make a classic statement with the Sparkling Row Eternity Ring. Hand-finished in 14k gold-plated sterling silver, this eternity ring features a band inlaid with sparkling clear cubic zirconia. The design looks equally beautiful worn solo or stacked with other rings. Style it with bands in similar tones to create a monochromatic look, or go for contrasting metals for a combination that pops. A classic silhouette with a modern interpretation, this ring is designed to be a wardrobe essential for years to come.','../assets/sparkle.png'),
  
  ];

  }
  public getProducts(): Product[] {
    return this.products;
  }
  setProducts(product: Product[]) {
    this.products = product;
    this.productsChanged.next(this.products.slice());
  }
  //deleteProduct(index:number){
    //this.products.splice(index,1);
   // this.productsChanged.next(this.products.slice());
 // }
}

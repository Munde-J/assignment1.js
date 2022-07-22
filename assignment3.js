// AkiraChix JavaScript CAT Prep
// Duration: Due on Friday at 9:00am (22nd July 2022)
// Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing
//  on connecting grocery vendors to rural farmers. This is through their 
//  online marketplace where farmers can trade vegetables and fruits with 
//  grocery vendors. To begin with, farmers have to register on the platform 
//  and login. Thereafter, they can upload their products with respective prices. 
//  On the other hand, grocery vendors can signup and login to the platform to place
//  their bulk order requests. 

// Create a class Mkulima that will keep a list of farms, grocery vendors and 
// products. A single farm record should contain id, farm name, farmer, phone 
// number and address. A single grocery vendor record should contain id, store 
// name and phone number. A product should have id, name and price fields. 

 
 class Mkulima{
 constructor(){
 this.farms = [];
 this.products = [];
 this.orders = [];

 //  addFarm - params: farmId, name, farmer, phone, address
 this.addFarm = (farmId, name, farmer, phone, address) => { 
 this.farms.push({farmId,name,farmer,phone,address})}
 
 //  removeFarm - params: farmId
 this.removeFarm = (farmId) => { 
 let position = this.farms.find(item => item.farmId ===farmId);
 let farmPosition = this.farms.indexOf(position);
 this.farms.splice(farmPosition, 1);}
 
 
 //  updateFarm - params: farmId, name, farmer, phone, address
 this.updateFarm = function(farmId, name, farmer, phone, address){ 
 let theFarm = this.farms.find(item => item.farmId ===farmId)
 theFarm.farmId =farmId;
 theFarm.name =name;
 theFarm.farmer =farmer;
 theFarm.phone =phone;
 theFarm.address =address;}
 
 //  getFarm - params: farmId - returns a farm object
 this.getFarm = (farmId)=>{ 
 console.log(this.farms.find(object=>object.Id===farmId))}
 
 //  addProduct - params: productId, name, price
 this.addProduct = (productId, name, price) => { 
 this.product.push({productId,name,price})}
 
 
 //  removeProduct - params: productId
 this.removeProduct = (productId) => { 
 let position = this.product.find(item => item.productId ===productId);
 let productLocation = this.product.indexOf(position);
 this.product.splice(productLocation, 1);}
 
 //  updateProduct - params: productId, name, price
 this.updateProduct = function(productId,name, price){ 
 let newProduct = this.product.find(item => item.productId ===productId)
 newProduct.productId =newProductId;
 newProduct.name = name;
 newProduct.price = price;
}
 
 //  getProduct - params: productId - returns a product object
 this.getProduct = (productId)=>{ 
 console.log(this.product.find(object=>object.product===productId))}
 
 //  printProducts - No param, console logs a list of product items with their prices.
 this.printProducts = ()=>{ 
 console.log()}
 
 // calculateOrderCost - params: productId, quantity
 this.calculateOrderCost = (productId,quantity)=>{ culateOrder
 let numberOfItems = this.product.find(object=>object.productId===productId);
 console.log(`${quantity} ${numberOfItems.name} for KES ${quantity*numberOfItems.price}`);}
 }
 }
 
 let farmers = new Mkulima();
 farmers.addFarm("34","Angela","Munde","0712345678", "Nakuru");
 farmers.addFarm("378","Manuela","June","+254712347436", "Kisumu");
 farmers.addFarm("109","Joy","Ochieng'","0798766545", "Maseno");
 console.log(farmers.farms);
 
 farmers.removeFarm("456");
 console.log();
 
 
 
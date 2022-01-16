class Uber{
    constructor(cartype,distance,priceperkm){
      this.cartype = cartype;
      this.distance = distance;
      this.priceperkm = priceperkm;
      this.totalprice = distance*priceperkm;
    
    }
  }
  
  function createUber(cartype,distance,priceperkm){
    let customer = new Uber(cartype,distance,priceperkm);
    return customer;
  }
  
  let customers = [];
  
  let customer1 = createUber("Sedan",20,10);
  let customer2 = createUber("Luxury", 5,20);
  let customer3 = createUber("HatchBack",34,15);
  
  
  customers.push(customer1, customer2, customer3);
  
  console.log('The Customers are: ')
  customers.map(cust => console.log(cust));
  
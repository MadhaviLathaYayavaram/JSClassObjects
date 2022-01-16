class Person{
  constructor(name, age, gender, AadharNo, UIN, address1, address2, city, state, phone, education,work,experience){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.AadharNo = AadharNo;
    this.UIN= UIN;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.phone = phone;
    this.education = education;
    this.work = work;
    this.experience = experience;
  }
}

function createPerson(name, age, gender, AadharNo, UIN, address1, address2, city, state, phone, education,work,experience){
  let personInfo = new Person(name, age, gender, AadharNo, UIN, address1, address2, city, state, phone, education,work,experience);
  return personInfo;
}


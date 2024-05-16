var itemsArray = [
  { name: "juice", price: "50", quantity: "3" },
  { name: "cookie", price: "30", quantity: "9" },
  { name: "shirt", price: "880", quantity: "1" },
  { name: "pen", price: "100", quantity: "2" },
];

var juice = itemsArray[0].price * itemsArray[0].quantity;
var cookie = itemsArray[1].price * itemsArray[1].quantity;
var shirt = itemsArray[2].price * itemsArray[2].quantity;
var pen = itemsArray[3].price * itemsArray[3].quantity;

console.log(juice, cookie, shirt, pen);

console.log(juice + cookie + shirt + pen);

var info = {
  firstname: "zubair",
  lastname: "Ahmed",
  age: "21",
  email: "zubairahmed@gmail.com",
  password: "mallu123",
  gender: "male",
  city: "Karachi",
  country: "Pakistan",
};

// for (var key in info) {
//   console.log(key, info[key]);
// };

info.isActive = true;
console.log(info);
console.log("firstname" in info);
console.log("age" in info);
console.log("country" in info);
console.log("lastname" in info);

function employees(firstname, lastname, id, designation) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.designation = designation;
  this.id = id;
  this.getfullname = function () {
    return this.firstname + " " + this.lastname;
  };
}

var employee1 = new employees("RAZA", "ALI", "Supervisor", "22010");
var employee2 = new employees("MUHAMMAD", "AKASHA", "Stenotypist", "22011");
var employee3 = new employees("GHULAM", "HAIDER", "Helper", "22012");

console.log(employee1.getfullname());
console.log(employee2.getfullname());
console.log(employee3.getfullname());
// };
 
// const newdata= new FormData(form(name,address,education,profession,gender));
function refreshPage(){
  event.preventDefault();
}
 function Person(name, address, education, profession, gender) {
  this.name = name;
  this.address = address;
  this.education = education;
  this.profession = profession;
  this.gender = gender;
}
const people = [];
document.getElementById('submitButton').addEventListener('click', function() {
  const form = document.getElementById('userForm');
  const formData = new FormData(form);
  const name = formData.get('name');
  const address = formData.get('address');
  const education = formData.get('education');
  const profession = formData.get('profession');
  const gender = formData.get('gender');

  const person= new Person(name,address,education,profession,gender);
  people.push(person);

  // const Person2= new Person(name,address,education,profession,gender);
  // people.push(Person2);
  // Log the values to the console
  // console.log('Name:', name);
  // console.log('Address:', address);
  // console.log('Education:', education);
  // console.log('Profession:', profession);
  // console.log('Gender:', gender);

  // const resultDiv = document.getElementById('result');
  // resultDiv.innerHTML = `
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Address:</strong> ${address}</p>
  //     <p><strong>Education:</strong> ${education}</p>
  //     <p><strong>Profession:</strong> ${profession}</p>
  //     <p><strong>Gender:</strong> ${gender}</p>
  // `;  
  console.log('All people:', people);
});



 
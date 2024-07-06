// var name = document.getElementById("name");
// var address = document.getElementById("address");
// var education = document.getElementById("education");
// var profession = document.getElementById("profession");
// var gender = document.getElementById("gender");
// function population(name, address, education, gender) {
//   this.name = name;
//   this.address = address;
//   this.educationr = education;
//   this.profession = profession;
//   this.gender = gender;
// };
// console.log(population());
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const submitButton = document.getElementById("submitButton");
  const resultDiv = document.getElementById("result");

  submitButton.addEventListener("click", function click() {
    function refreshPage() {
      stopRefresh.preventDefault();
    }
    const formData = new FormData(form);
    const name = formData.get("fullname");
    const address = formData.get("address");
    const education = formData.get("education");
    const profession = formData.get("profession");
    const gender = formData.get("gender");

    // Log the values to the console
    console.log("Name:", fullname);
    console.log("Address:", address);
    console.log("Education:", education);
    console.log("Profession:", profession);
    console.log("Gender:", gender);

    resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Gender:</strong> ${gender}</p>
        `;
  });
});

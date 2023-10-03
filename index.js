// Add your code here
function submitData(name, email){
    //Sending Data using POST
fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {"Content-Type": "application/json",
    Accept: "application/json",
},
body:JSON.stringify({
    name:"Steve",
    email:"steve@steve.com",
})

})

    //Handling Response
.then(function (response){
    return response.json();
})
.then(function (object){
    console.log(object)
});

    //Handle Errors


}
// const submitData ={
//     userName:"",
//     userEmail:"",
// };

function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const idElement = document.createElement('p');
        idElement.textContent = data.id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
  
  // You can call the submitData function with a name and email as follows:
  // Replace 'John' and 'john@example.com' with the desired values
  
  submitData('Basil', 'basil@gmail.com');
  
  
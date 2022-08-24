// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);
let name = "Sam"
let email = "sam@sam.com"
let body = document.querySelector("body");


function submitData (userName, userEmail){
return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })
})

.then((resp)=>{
    return resp.json()
})

.then((data)=>{
    body.innerHTML = `<p>${data.id}</p>`
})

.catch((error)=>{
body.innerHTML = `${error.message}`
})
}

// submitData(name,email);
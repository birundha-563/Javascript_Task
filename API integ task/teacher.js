let arr = [];
let edittable;
let obj = {};
window.onload = () => {
  Edit();
};
function cancel(){
 window.location.href="index.html"
  }
  function male() {
    let male= document.getElementById('male').checked
    if (male===true){
      document.getElementById('female').checked=false
    }
  }
  function female() {
    let female= document.getElementById('female').checked
    if (female===true){
      document.getElementById('male').checked=false
    }
  }
  

function submit() {
    // console.log(submit)
    let name = document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let gender_value = document.querySelector('input[name="gender"]:checked');
    let gender;
    if(gender_value){
      gender=gender_value.value
    }
    let language = document.getElementById("language").value;
    let dateofbirth = document.getElementById("dateofbirth").value;
 
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);
    console.log(confirm);
    console.log(gender);
    console.log(language);
    console.log(dateofbirth);
    let think=false;

    
  if (name.length<3) {
    document.getElementById("error1").innerHTML = "!Name required**";
    document.getElementById("name").style.border = "2px solid red";
    think=true;

  } else {
    document.getElementById("error1").innerHTML = "";
    document.getElementById("name").style.border = "2px solid green";

  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("error2").innerHTML = "!Email required**";
    document.getElementById("email").style.border = "2px solid red";
    think=true;
   
  } else {
    document.getElementById("error2").innerHTML = "";
    document.getElementById("email").style.border = "2px solid green";

  }
    
  if (phone.length===10) {
    document.getElementById("error3").innerHTML = " ";
    document.getElementById("phone").style.border = "2px solid green";
  } else {
    document.getElementById("error3").innerHTML = "!Phonenumber required** ";
    document.getElementById("phone").style.border = "2px solid red";
    think=true;

  }
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  console.log(passwordRegex.test(password))
  if (passwordRegex.test(password)) {
  
    document.getElementById("error4").innerHTML = "";
    document.getElementById("password").style.border = "2px solid green";
    
   
  } else {
   
    document.getElementById("error4").innerHTML =  "!Password required**";
    document.getElementById("password").style.border = "2px solid red";
    think=true;

  }

  if (!password===confirm) {
    document.getElementById("error5").innerHTML = "confirmPassword required**";
    document.getElementById("confirm").style.border = "2px solid red";
    think=true;
   
  } else {
    document.getElementById("error5").innerHTML = "";
    document.getElementById("confirm").style.border = "2px solid green";
   


  }
if (language==="Select") {
  document.getElementById("error7").innerHTML = "!language required**";
  document.getElementById("language").style.border = "2px solid red";
  think=true;
} else {
  document.getElementById("error7").innerHTML = " ";
  document.getElementById("language").style.border = "2px solid green";

}
if (dateofbirth=="") {
  document.getElementById("error8").innerHTML = " !Dateofbirth required**";
  document.getElementById("dateofbirth").style.border = "2px solid red";
  think=true;


} else {
  document.getElementById("error8").innerHTML = "";
  document.getElementById("dateofbirth").style.border = "2px solid green";

}
if (gender===""||gender===undefined||gender===null) {
  document.getElementById("error6").innerHTML = "!Gender required";
  think=true;


} else {
  document.getElementById("error6").innerHTML = "";
}


if (
  think
){
  return false;
}
  
  
  
  
  
  
  /*(name == "" ||
   email == "" || 
   phonenumber == "" || 
   password == "" || 
   confirmpassword == "" ||
   gender == "" || 
   language== "" || 
   dateofbirth == "" ) {
  return false;*/





let obj = { name,email,phone, password, confirm, gender, language, dateofbirth };
if (edittable != undefined) {
  // console.log(edittable);


//let url= "https://65112d38829fa0248e3f9a80.mockapi.io/employee/teacher";
let url="https://6513d4378e505cebc2ea3784.mockapi.io/teacher";


fetch(url + "/" + edittable, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(obj),
})
  .then((Result) => Result.json())
  .then((string) => {
    console.log(string);
    window.location.replace('teachertable.html');
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });


} else {

  //let url ="https://65112d38829fa0248e3f9a80.mockapi.io/employee/teacher";
  let url="https://6513d4378e505cebc2ea3784.mockapi.io/teacher";

  
  


  fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace('teachertable.html');
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });

}
}


function Edit() {
    
  var url_string=window.location.href.toLocaleLowerCase();
  var url=new URL(url_string);
  var id=url.searchParams.get("id")
  edittable = id;
  console.log(edittable);
  if(id){
  
  //let url = "https://65112d38829fa0248e3f9a80.mockapi.io/employee/teacher";
  let url="https://6513d4378e505cebc2ea3784.mockapi.io/teacher";



  fetch(url +"/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  .then((Result) => Result.json())
  .then((string) => {
   arr=string;
   console.log(arr);
  document.getElementById("name").value = arr.name;
  document.getElementById("email").value = arr.email;
  document.getElementById("phone").value = arr.phone;
  document.getElementById("password").value = arr.password;
  document.getElementById("confirmpassword").value = arr.confirmpassword;
  if (arr.gender === "male") {
    document.getElementById("male").checked = true;
  } else if (arr.gender === "female") {
    document.getElementById("female").checked = true;
  } else {
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
}
  document.getElementById("language").value = arr.language;
  document.getElementById("dateofbirth").value = arr.dateofbirth;
})
.catch((errorMsg) => {
  console.log(errorMsg);
});
}
}
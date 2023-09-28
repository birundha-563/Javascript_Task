let arr = [];
let edittable;
let obj={};
window.onload = () => {
  Edit();
};

function submit() {
  console.log(submit)
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let mail = document.getElementById("mail").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let gender= document.getElementById("gender").value;
   
  if (name == "") {
    document.getElementById("error1").innerHTML = "Name required!";
  } else {
    document.getElementById("error1").innerHTML = "";
  }
  if (age == "") {
    document.getElementById("error2").innerHTML = "Password required!";
  } else {
    document.getElementById("error2").innerHTML = "";
  }
  if (mail == "") {
    document.getElementById("error3").innerHTML = " required!";
  } else {
    document.getElementById("error3").innerHTML = "";
  }
  if (gender == "") {
    document.getElementById("error4").innerHTML = " required!";
  } else {
    document.getElementById("error4").innerHTML = "";
  }
  if (phoneNumber == "") {
    document.getElementById("error5").innerHTML = "phoneNumber required!";
  } else {
    document.getElementById("error5").innerHTML = "";
  }


  if (
    name == ""||
    age == ""||
    mail == ""||
    phoneNumber == "" || 
    gender == "" ) 
    {
    return false;
  }
  
  let obj = { name, age, mail,phoneNumber,gender };
  if(edittable!=undefined){
    let url="https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url+ "/"+edittable, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace(`list.html`);
        console.log(`Title of our response :  ${string.name}`)

      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
    //console.log(edittable);
    //arr[edittable].name=document.getElementById("name").value;
    //arr[edittable].age=document.getElementById("age").value ;
    //arr[edittable].mail=document.getElementById("mail").value;
    //arr[edittable].phoneNumber=document.getElementById("phoneNumber").value ;
    //arr[edittable].gender=document.getElementById("gender").value;
    
  }
 
  else{
    let url="https://65092641f6553137159b005a.mockapi.io/student";
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((Result) => Result.json())
        .then((string) => {
          console.log(string);
          window.location.replace(`list.html`);
          console.log(`Title of our response :  ${string.name}`)

        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
  }
  
//   localStorage.setItem("arr", JSON.stringify(arr));
//   window.location.replace(`list.html`);
  
}
  function Edit() {

    console.log(window);
    var url_string=window.location.href.toLocaleLowerCase();
    console.log(url_string);
    var url=new URL(url_string)
    console.log(url);
    var id=url.searchParams.get("id")
    edittable = id;
    console.log(edittable);
    arr = JSON.parse(localStorage.getItem('arr')) || [];
   if(id){
    let url="https://65092641f6553137159b005a.mockapi.io/student";
  
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        arr = string;

    document.getElementById("name").value = string.name;
    document.getElementById("age").value = string.age;
    document.getElementById("mail").value = string.mail;
    document.getElementById("phoneNumber").value = string.phoneNumber;
    document.getElementById("gender").value = string.gender;
    console.log(`Title of our response :  ${string.name}`)
    arr = string;
    console.log(arr);
   
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
   }
  }











 
let arr = [];
let editText;
let obj = {};
/*window.onload=()=>{
  
 /* addTable()
}*/
window.onload = () => {
  Edit();
};



function submit() {
  let name = document.getElementById("name").value;
  //console.log(name);
  let password = document.getElementById("password").value;
  //console.log(password);


  if (name == "") {
    document.getElementById("error1").innerHTML = "name required";
  } else {
    document.getElementById("error1").innerHTML = "";
  }
  if (password == "") {
    document.getElementById("error2").innerHTML = "password required";
  } else {
    document.getElementById("error2").innerHTML = "";   
  }

  if (
    name == "" ||
    password == "") {
    return false;
  }

  
 
  let obj = { name, password };
  if (editText != undefined) {
   console.log(editText);
   arr[editText].name = document.getElementById("name").value;
    arr[editText].password = document.getElementById("password").value;
  } 
  else {
    arr.push(obj);
  }



  // let arr = JSON.parse(localStorage.getItem('arr')) || [];
  //arr.push(obj);
  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.replace(`list.html`);
  
  
}


  
 
/*function addTable() {
  arr = JSON.parse(localStorage.getItem('arr'))||[]
  console.log(arr)
  let l = "";
  for (i = 0; i < arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l += '<td><button type="button" class="btn btn-info" onclick="Edit(' + i + ')">Edit</button>  <button type="button" class="btn btn-danger"   onclick="Delete(' + i + ')">Delete</button></td>';
    l += "</tr>";
  }
  document.getElementById("tablevalue").innerHTML = l;
}*/

function Edit() {
   
   var url_string=window.location.href.toLocaleLowerCase();
   var url=new URL(url_string);
   var id=url.searchParams.get("id");
   editText = id;
   arr = JSON.parse(localStorage.getItem("arr")) || [];


  console.log(editText);
  if(id)

  {
  document.getElementById("name").value = arr[id].name;
  document.getElementById("password").value = arr[id].password;
  }

}

/*function Delete(id) {
  arr.splice(id, 1);
  console.log(id);

  localStorage.setItem("arr", JSON.stringify(arr));
  addTable()
}*/




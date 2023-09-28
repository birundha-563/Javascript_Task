let arr = [];
let editText;
let obj = {};
window.onload=()=>{
  
  addTable()
}

function submit() {
  let name = document.getElementById("name").value;
  console.log(name);
  let password = document.getElementById("password").value;
  console.log(password);


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
    name == "",
    password == "") {
    return false;
  }

  
  insertTable()
    
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";

}

function insertTable() {

  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let obj = { name, password };
  console.log(obj);

  if(editText!=undefined){
    arr[editText].name=obj.name;
    arr[editText].password=obj.password;
    //  window.location.replace(`list.html`);
    //editText=undefined;
    
  }
  else{
    arr.push(obj);
    // window.location.replace(`list.html`);
    // window.location.href="index.html?id="+id
  }
  console.log(editText);
  console.log(arr);
  localStorage.setItem("arr", JSON.stringify(arr));
  
  addTable();

 }
 
function addTable() {
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
}

function Edit(id) {
  // var url_string=window.location.href.toLocaleLowerCase();
  // var url=new URL(url_string)
  // var id=url.searchParams.get("id")
  editText = id;
  console.log(editText);
  document.getElementById("name").value = arr[id].name;
  document.getElementById("password").value = arr[id].password;

}
function Delete(id) {
  arr.splice(id, 1);
  console.log(id);

  localStorage.setItem("arr", JSON.stringify(arr));
  addTable()
}




window.onload = () => {
  table();
};


let arr = [];
let edittable;
let obj = {};
function back() {
  window.location.replace('index.html');

}

function add() {
  window.location.replace('teacher.html');
}



async function table() {


let url="https://6513d4378e505cebc2ea3784.mockapi.io/teacher";

  

await fetch(url, {
 method: "GET",
 headers: { "Content-Type": "application/json" },
})
.then((Result) => Result.json())
.then((res) => {
 console.log(res);
 arr=res;
 console.log(arr);

})
.catch((errorMsg) => {
 console.log(errorMsg);
});

let l = "";
for (let i = 0; i < arr.length; i++) {
  l += "<tr>";
  l += "<td>" + arr[i].name + "</td>";
  l += "<td>" + arr[i].email + "</td>";
  l += "<td>" + arr[i].phone + "</td>";
  l += "<td>" + arr[i].password + "</td>";
  l += "<td>" + arr[i].confirm + "</td>";
  l += "<td>" + arr[i].gender + "</td>";
  l += "<td>" + arr[i].language + "</td>";
  l += "<td>" + arr[i].dateofbirth + "</td>";
  l += '<td><button type="button" class="btn btn-info me-33"  onclick="Edit(' + arr[i].id + ')">Edit</button>  <button type="button" class=" btn btn-danger" onclick="Delete(' + arr[i].id +')">Delete</button></td>';
    l += "</tr>";
}

document.getElementById("tablevalue").innerHTML = l;
}

function Edit(id) {
  edittable = id;
window.location.href = "teacher.html?id=" + id;

}


async function Delete(id) {

let url="https://6513d4378e505cebc2ea3784.mockapi.io/teacher";

  

await fetch(url +"/"+id, {
method: "DELETE",
headers: { "Content-Type": "application/json" },
})
.then((Result) => Result.json())
.then((string) => {
  console.log(string);
  console.log('Title of our response :  ${string.name}');
 
})
.catch((errorMsg) => {
  console.log(errorMsg);
});
table();
}
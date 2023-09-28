window.onload = () => {
  addTable();
};

let arr = [];
let editText;
let obj = {};
/*window.onload = () => {
  arr = JSON.parse(localStorage.getItem('arr')) || [];
  addTable();
}; */
function addTable() {
  arr = JSON.parse(localStorage.getItem('arr'))||[]
  //console.log(arr)
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
    /*var url_string=window.location.href.toLocaleLowerCase();
     var url=new URL(url_string)
     var id=url.searchParams.get("id")
    editText = id;*/
    //window.location.replace('index.html');
    window.location.href = "index.html?id=" + id;


    /*console.log(editText);
    document.getElementById("name").value = arr[id].name;
    document.getElementById("password").value = arr[id].password;*/

  }
  function back(){
    window.location.replace('index.html');
  }
  function Delete(id) {
    arr.splice(id, 1);
    /*console.log(id);
    addTable();*/
  
    localStorage.setItem("arr", JSON.stringify(arr));
    addTable()
  }
  

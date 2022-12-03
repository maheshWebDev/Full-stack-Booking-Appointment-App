const formEvent = document.getElementById("form")
// from even
formEvent.addEventListener("submit",post)
// window event
window.addEventListener("DOMContentLoaded",get)

//  post request 
function post(e){
    // e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let obj = {name : name,email:email};
    axios.post("http://localhost:3000/users",obj)
    .then((res)=>{showOnScreen(res.data)})
    .catch((err)=>{console.log(err)})
}
// showon screen
function showOnScreen(obj){
let list = document.getElementById("list");
let addToList = `<li id=\"${obj.id}\">${obj.name} -${obj.email}<button onClick=deleteUser("${obj.id}")>Delete</button>
<button onClick=editDetails(\"${obj.id}\",\"${obj.name}\",\"${obj.email}\")>Edit</button>`
if(obj.email){
    list.innerHTML += addToList;
}

}

// get request 
function get(e){
    e.preventDefault();
    axios.get("http://localhost:3000/users")
    .then((res)=>{for(let i = 0;i<res.data.length;i++){
        showOnScreen(res.data[i])
    }})
    .catch((err)=>{console.log(err)})
}
delete user
function deleteUser(id){
    console.log(id)
    axios.delete(`http://localhost:3000/delete-user/${id}`)
    .then((res)=>{removeUser(id)})
    .catch((err)=>{console.log(err)});
}

// remove user from screen

function removeUser(id){
    let parent = document.getElementById("list")
    let remove = document.getElementById(id);
    parent.removeChild(remove)
}

// edit User

// function editDetails(id,name,email){
//     document.getElementById("name").value= name;
//     document.getElementById("email").value=email;
//     // let obj = {name :name,email:email}
//     // axios.put("https://crudcrud.com/api/fe9cee1625544ccca63a1d823b787abb/obj/",obj)
//     // .then((res)=>{ deleteUser(id);
//     //     showOnScreen(res.data)})
//     // .catch((err)=>{console.log(err)})
//     deleteUser(id)
// }
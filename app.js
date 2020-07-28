var list=document.getElementById("list")


function addtodo(){
    var todo_item = document.getElementById("todo-item")

    var li=document.createElement('li')
    var liText=document.createTextNode(todo_item.value)

    li.appendChild(liText)

    var delbtn=document.createElement("button")
    var delText=document.createTextNode("DELETE")
delbtn.appendChild(delText)
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.setAttribute("class","btn")

var editBtn=document.createElement("button")
var editTEXT=document.createTextNode("EDIT")
editBtn.appendChild(editTEXT)
editBtn.setAttribute("class","btn")
editBtn.setAttribute("onclick","editItem(this)")

li.appendChild(delbtn)

li.appendChild(editBtn)
    list.appendChild(li)
    todo_item.value=""
    console.log(li)

}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML=""
}
function editItem(e){
  var editValue=prompt("enter edit value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue=editValue
}
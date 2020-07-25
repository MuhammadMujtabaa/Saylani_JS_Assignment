var displayListItems = document.getElementById('display-list-items');



function addToList(){
    if( document.getElementById('input').value == "") {
        alert("Plz Enter In Input Field");
    }
    else{

    var input  = document.getElementById('input');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    
    td.setAttribute("style","width:50% ;")
    var tdText = document.createTextNode(input.value);
    td.appendChild(tdText);
    tr.appendChild(td);
    displayListItems.appendChild(tr);

    
    

    ////////////delete button
    var td2 = document.createElement('td');
    var delbtn = document.createElement("button");
    var deleteBtnTxt = document.createTextNode("DELETE");
    delbtn.appendChild(deleteBtnTxt);
    td2.appendChild(delbtn);
    tr.appendChild(td2);
    delbtn.setAttribute("class","btn btn-danger btn-sm btn-block ");
    delbtn.setAttribute("onclick","deleteItem(this)");
    
    //////////////////////Edit button
    var td3 = document.createElement('td');
    var editbtn = document.createElement("button");
    var editBtnTxt = document.createTextNode("EDIT");
    editbtn.appendChild(editBtnTxt);
    td3.appendChild(editbtn);
    tr.appendChild(td3);
    editbtn.setAttribute("class","btn btn-success btn-sm btn-block ");
    editbtn.setAttribute("onclick","editItem(this)");


    
    
     input.value ="";

    }
}
    
    
function deleteItem (e){
    e.parentNode.parentNode.remove();
}

function deleteall(){
    displayListItems.innerHTML="";
}

function editItem(e){
    // var value = e.parentNode.firstChild.nodeValue;
    // var editValue = prompt("Edit your value",value);
    // e.parentNode.firstChild.nodeValue = editValue ;
    
    var value = e.parentNode.parentNode.firstChild.firstChild.nodeValue;
    var editValue = prompt("Edit your value",value);
    e.parentNode.parentNode.firstChild.firstChild.nodeValue = editValue
    //console.log(e.parentNode.parentNode.firstChild.firstChild.nodeValue);
}


// function editItem(e){
//     var value = e.parentNode.firstChild.nodeValue;
//     var editValue = prompt("Edit your value",value);
//     e.parentNode.firstChild.nodeValue = editValue ;
    
//     //console.log(e.parentNode.firstChild);
// }



























// function addToList(){
//     if( document.getElementById('input').value == "") {
//         alert("Plz Enter In Input Field");
//     }
//     else{
//     var input  = document.getElementById('input');
//     var li = document.createElement('li');
//     var liText = document.createTextNode(input.value);
//     li.appendChild(liText);
//     displayListItems.appendChild(li);

//     ////////////delete button

//     var delbtn = document.createElement("button");
//     var deleteBtnTxt = document.createTextNode("DELETE");
//     delbtn.appendChild(deleteBtnTxt);
//     li.appendChild(delbtn);
//     delbtn.setAttribute("class","delbtn");
//     delbtn.setAttribute("onclick","deleteItem(this)");
    
//     //////////////////////Edit button
//     var editbtn = document.createElement("button");
//     var editBtnTxt = document.createTextNode("EDIT");
//     editbtn.appendChild(editBtnTxt);
//     li.appendChild(editbtn);
//     editbtn.setAttribute("class","editbtn");
//     editbtn.setAttribute("onclick","editItem(this)");
    
//     // console.log(input.value);
//     input.value ="";
// }
//     }
    
    
// function deleteItem (e){
//     //console.log(e.parentNode);
//     e.parentNode.remove();
// }



// function deleteall(){
//     displayListItems.innerHTML="";
// }

// function editItem(e){
//     var value = e.parentNode.firstChild.nodeValue;
//     var editValue = prompt("Edit your value",value);
//     e.parentNode.firstChild.nodeValue = editValue ;
    
//     //console.log(e.parentNode.firstChild);
// }










// var input  = document.getElementById('input');
//     var li = document.createElement('li');
//     var liText = document.createTextNode(input.value);
//     li.appendChild(liText);
//     displayListItems.appendChild(li);

//     ////////////delete button

//     var delbtn = document.createElement("button");
//     var deleteBtnTxt = document.createTextNode("DELETE");
//     delbtn.appendChild(deleteBtnTxt);
//     li.appendChild(delbtn);
//     delbtn.setAttribute("class","delbtn");
//     delbtn.setAttribute("onclick","deleteItem(this)");
    
//     //////////////////////Edit button
//     var editbtn = document.createElement("button");
//     var editBtnTxt = document.createTextNode("EDIT");
//     editbtn.appendChild(editBtnTxt);
//     li.appendChild(editbtn);
//     editbtn.setAttribute("class","editbtn");
//     editbtn.setAttribute("onclick","editItem(this)");
    
//     // console.log(input.value);
//     input.value ="";
// }
// function deleteItem (e){
//     //console.log(e.parentNode);
//     e.parentNode.remove();
// }



// function deleteall(){
//     displayListItems.innerHTML="";
// }

// function editItem(e){
//     var value = e.parentNode.firstChild.nodeValue;
//     var editValue = prompt("Edit your value",value);
//     e.parentNode.firstChild.nodeValue = editValue ;
    
//     //console.log(e.parentNode.firstChild);
// }
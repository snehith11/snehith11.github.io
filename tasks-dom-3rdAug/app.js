
// var inputElement= document.getElementById("input1");   
// var displayElement = document.getElementById("display");
// var orderListElement = document.createElement("ol");
// displayElement.appendChild(orderListElement)
// function addText(){
//     let node1= document.createElement("li");
//     let node2= document.createTextNode(`${inputElement.value}`);
//     let node3= document.createElement("button");
//     node3.append("Done")
//     node1.appendChild(node2);
//     node1.appendChild(node3)
//     orderListElement.appendChild(node1);
//     node3.addEventListener("click",() =>{
//         node1.remove();
//     })
//     inputElement.value="";
// }

var inputElement= document.getElementById("input1");   
var displayElement = document.getElementById("display");
var orderListElement = document.createElement("ol");
displayElement.appendChild(orderListElement);
var arr=[];

function addText(){
    obj = {"input": inputElement.value, "present":true };
    arr.push(obj);
    updateNode();
}

function updateNode(){
    orderListElement.innerHTML="";
    for(let i=0; i<arr.length;i++){
        if(arr[i].present == true){
            console.log(arr);
            node1= document.createElement("li");
            node2=document.createElement("button")
            node2.append("done");
            node1.append(arr[i].input);
            node1.append(node2);
            node2.onclick= function(){
                arr[i].present= false;
                updateNode();
            }
            console.log(node1)
            orderListElement.appendChild(node1);
        }
    }
}
// Points for using form
// 1. wrap every input inside form tag
// 2. instead of taking button, use input type=submit
// 3. Add eventListener to form tag
// 4. event name should be submit
// 5. whenever you use forms, it will try to send data to server, in this process page is getting refreshed -- it is default behaviour
//6. we should prevent that default behaviour - event.preventDefault()

// document.querySelector("form").addEventListener("submit", todoList);

// function todoList() {
//   event.preventDefault();
//   var itemName = document.querySelector("#name").value;
//   var itemQty = document.querySelector("#qty").value;
//   var itemPriority = document.querySelector("#priority").value;

//   console.log(itemName, itemQty, itemPriority);

//   var tr = document.createElement("tr"); //creating element tr


//   var td1 = document.createElement("td"); //creating element td
//   td1.innerText = itemName; //giving td1 inner text to the itemName
//   var td2 = document.createElement("td");
//   td2.innerText = itemQty;
//   var td3 = document.createElement("td");
//   td3.innerText = itemPriority;

  
//   tr.append(td1, td2, td3); //append data to tr
//   document.querySelector("tbody").append(tr);
// }





document.querySelector("form").addEventListener("submit", todoList);

function todoList(){
  event.preventDefault();

 var itemName= document.querySelector("#name").value
 var itemQty= document.querySelector("#qty").value;
 var itemPriorty= document.querySelector("#priority").value;

var tr=document.createElement("tr") // creating tr and storing values in it

var td1=document.createElement("td");
td1.innerText=itemName;

var td2=document.createElement("td");
td2.innerText=itemQty;

var td3=document.createElement("td");
td3.innerText=itemPriorty;

tr.append(td1,td2,td3)


document.querySelector("tbody").append(tr) // appending all the data which is in tr to tbody 

 console.log(itemName,itemQty,itemPriorty) //printing th data

}

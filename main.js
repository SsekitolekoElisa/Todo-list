const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function (){
 
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

   showItem()
})


// function to help us display our input to do items on the screen after caputuring them
function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
   

   html += `
   <div class="todoList">
   <span class="doneTask" onClick="doneTask(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(7, 248, 74, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg></span>
   <p class="pText">${data}</p>
   <span class="deleteTask" onClick="deleteItem(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(248, 7, 11, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path></svg></span>
   </div>
   `
})
itemShow.innerHTML = html;
}
showItem()

//function to help use delet the do item on the to do list
function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}


//function to help use delet the do item on the to do list
// function doneTask(index){
//    let localItems = JSON.parse( localStorage.getItem('localItem'))
//    taskList.splice(index, 1).strike()
//    localStorage.setItem('localItem', JSON.stringify(taskList).strike());
//    showItem()
// }

//function to help use delet the do item on the to do list
function doneTask(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)

   if(index >= 0)
   {
   const ul =document.querySelector('.pText');
  //Adding an Element
  ul.setAttribute('class','strike')
   }

}

//this will enable us to delete the saved to do iteams to the local storage.
function clearTask(){
   
localStorage.clear()
showItem()
}
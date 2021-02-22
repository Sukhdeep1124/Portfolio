const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const todo = JSON.parse(localStorage.getItem('todo'));
form.addEventListener("submit", (e)=>{

	e.preventDefault();
   update();
	const todoText = input.value;
	 
	if(todoText){
    const todoE1 = document.createElement('li');
    todoE1.innerHTML = todoText;
    todoE1.addEventListener("click", ()=>{
      todoE1.classList.toggle("completed");
   update();

    });
    todoE1.addEventListener("contextmenu", (e) =>{
    	e.preventDefault();
    	todoE1.remove();
    	update();
    });

    todos.appendChild(todoE1);
     input.value ="";

   }
});
function update() {
  	const list =  document.querySelectorAll('li');
  	const todo = [];

  	list.forEach(todoText=>{
  		todo.push(todos.value);

  	});
  	localStorage.setItem("todoText",JSON.stringify(todo));
  }

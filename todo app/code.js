const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const todosE1 = JSON.parse(localStorage.getItem('todos'));
todosE1.forEach(todo => {
addtodo(todo);

});


form.addEventListener("submit", (e)=>{
e.preventDefault();
addtodo();
	});

 
	

function addtodo(todo){
	let todoText = input.value;
	if(todo){
		todoText = todo.text;
	}
if(todoText){
    const todoE1 = document.createElement('li');
    if(todo && todo.completed){
    	todoE1.classList.add("completed");
    }
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
update();
   }
}
function update() {
  	const todoEL =  document.querySelectorAll('li');
  	const todos = [];

  	todoEL.forEach(todo=>{
  		todos.push({
  			text:todo.innerText,
  			completed:todo.classList.contains("completed"),
  		});

  	});
  	localStorage.setItem("todos",JSON.stringify(todos));
  }
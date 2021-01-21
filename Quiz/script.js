
const quizData =[

{

	question : "What is the only function all C++ programs must contain?",

	a: "Start()",
	b: "System()",
	c: "Program()",
	d: "Main()",
    correct:"d",

},
{

	question : "Which of the following is the boolean operator for logical-and?",

	a: "|",
	b: "&",
	c: "|&",
	d: "&&",
	correct:"d",
},
{

	question : "Evaluate !(1 && !(0 || 1)).",

	a: "True",
	b: "False",
	c: "Unevaluate",
	d: "None",
    correct:"a",
},
{

	question : "What punctuation is used to signal the beginning and end of code blocks?",

	a: "( and )",
	b: "{ }",
	c: "-> and",
	d: "BEGIN and END)",
    correct:"b",
},
{

	question : "Which of the following is the correct operator to compare two variables?",

	a: "|=",
	b: "Equal",
	c: "==",
	d: "=",
    correct:"c",
},
{

	question : "What punctuation ends most lines of C++ code?",

	a: "; (semi-colon)",
	b: "' (single quote)",
	c: ". (dot)",
	d: ": (colon)",
    correct:"a",
},
{

	question : "What is the correct value to return to the operating system upon the successful completion of a program?",

	a: "-1",
	b: "0",
	c: "1",
	d: "Program do not retuen a value",
    correct:"b",
},
{

	question : "Which of the following is a correct comment?",

	a: "{ Comment }",
	b: "/* Comment */",
	c: "*/ Comments */",
	d: "** Comment **",
	correct:"b",
},
{

	question : "Which of the following is not a correct variable type?",

	a: "Float",
	b: "Real",
	c: "Int",
	d: "Double",
    correct:"b",
},
{

	question : "Which of the following is true?",

	a: "1",
	b: "-1",
	c: "88",
	d: "All of above",
	correct:"d",
},

]

const quiz = document.getElementById("quiz");
const questionXs = document.getElementById("question");
const answerXs = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQ = 0;
let score = 0;

function load () {

	const currentQData = quizData[currentQ];
     questionXs.innerText = currentQData.question;
     a_text.innerText = currentQData.a;
     b_text.innerText = currentQData.b;
     c_text.innerText = currentQData.c;
     d_text.innerText = currentQData.d;

}

load();


function getSelected () {

      let answer = undefined;

      answerXs.forEach((answerX)=> {
            if(answerX.checked)
            {
            	answer = answerX.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerXs.forEach(answerX=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQ].correct){

         	score++;
         }
         
         currentQ++;

         if(currentQ < quizData.length){
         	load();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});
let lessonData;


fetch("../data/lessons/grade1-math.json")

.then(res=>res.json())

.then(data=>{


lessonData=data;


showLesson();


});




function showLesson(){


let lesson =
lessonData.lessons[0];


document.getElementById(
"lesson"
).innerHTML=


`

<h2>
${lesson.title}
</h2>


<p>
${lesson.concept}
</p>



<h3>
Examples
</h3>


<ul>

${lesson.examples
.map(x=>`<li>${x}</li>`)
.join("")}

</ul>

`;


localStorage.setItem(
"currentQuiz",
lesson.quiz
);


}




function startQuiz(){

window.location.href=
"quiz.html";

}

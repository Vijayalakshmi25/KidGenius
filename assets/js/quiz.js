let questions;


let index=0;


let score=0;



fetch("../data/questions/math.json")

.then(res=>res.json())

.then(data=>{


let quiz=
localStorage.getItem(
"currentQuiz"
);


questions=data[quiz];


showQuestion();


});





function showQuestion(){


let q =
questions[index];



document.getElementById(
"quiz"
).innerHTML=


`

<h2>
${q.question}
</h2>


${q.options.map(

x=>`

<button onclick="
checkAnswer(${x})
">

${x}

</button>

`

).join("")}

`;



}




function checkAnswer(answer){


if(answer==
questions[index].answer){

score++;

}



index++;



if(index < questions.length){

showQuestion();

}

else{

finishQuiz();

}


}




function finishQuiz(){


let xp =
score*10;


let player =
JSON.parse(
localStorage.getItem(
"kidgenius_player"
)
);



addXP(xp);

addStars(score);


player.lessons++;


if(score==questions.length){

player.mathPerfect++;

}


savePlayer(player);


checkBadges();


localStorage.setItem(

"kidgenius_player",

JSON.stringify(player)

);



document.getElementById(
"quiz"
).innerHTML=

`

<h2>
🎉 Completed
</h2>

<h3>
Score:
${score}/${questions.length}
</h3>


<p>
+${xp} XP earned
</p>

<a href="../index.html">

Back Home

</a>

`;

}

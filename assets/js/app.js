let grades =
document.getElementById(
"grades"
);


let subjects =
document.getElementById(
"subjects"
);



for(
let grade=1;
grade<=5;
grade++
){


let card =
document.createElement(
"div"
);


card.className="card";


card.innerHTML=

`

<h2>

Grade ${grade}

</h2>

📚

`;



card.onclick=function(){

showSubjects(grade);

};



grades.appendChild(card);


}




function showSubjects(grade){


subjects.innerHTML="";



let list =
[
"Math",
"English",
"Science",
"Computer",
"Chess",
"General Knowledge"
];



list.forEach(subject=>{


let card =
document.createElement(
"div"
);



card.className="card";


card.innerHTML=

`

<h3>
${subject}
</h3>

📖

`;



subjects.appendChild(card);


});


}

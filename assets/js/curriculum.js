let curriculum;



async function loadCurriculum(){


let response =
await fetch(
"data/curriculum/grades.json"
);


curriculum =
await response.json();


displayGrades();


}



function displayGrades(){


let box =
document.getElementById(
"grades"
);


curriculum.grades.forEach(g=>{


let card =
document.createElement(
"div"
);


card.className="card";


card.innerHTML=

`
<h2>
${g.name}
</h2>
`;



card.onclick=()=>{

showSubjects(g);

};



box.appendChild(card);


});


}




function showSubjects(grade){


let box =
document.getElementById(
"subjects"
);


box.innerHTML="";


grade.subjects.forEach(s=>{


let card =
document.createElement(
"div"
);


card.className="card";


card.innerHTML=

`
<h3>
${s.icon}
${s.name}
</h3>
`;



box.appendChild(card);


});


}


loadCurriculum();

function updateStreak(){


let player=getPlayer();


let today=
new Date()
.toDateString();



let last=
localStorage.getItem(
"lastStudy"
);



if(last!==today){


player.streak++;


localStorage.setItem(
"lastStudy",
today
);


savePlayer(player);


}



}

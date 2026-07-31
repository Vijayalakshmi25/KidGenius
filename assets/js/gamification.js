function addXP(amount){


let player=getPlayer();


player.xp += amount;


updateLevel(player);


savePlayer(player);


showReward(
"🚀 +" + amount + " XP"
);


}



function addStars(amount){


let player=getPlayer();


player.stars += amount;


savePlayer(player);


}



function updateLevel(player){


if(player.xp>=1500){

player.level=5;

}

else if(player.xp>=700){

player.level=4;

}

else if(player.xp>=300){

player.level=3;

}

else if(player.xp>=100){

player.level=2;

}

else{

player.level=1;

}

}



function showReward(message){


let popup=document.createElement(
"div"
);


popup.className="reward";


popup.innerHTML=message;


document.body.appendChild(popup);



setTimeout(()=>{

popup.remove();

},2000);


}

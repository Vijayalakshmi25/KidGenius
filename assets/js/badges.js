function checkBadges(){


let player=getPlayer();



if(
player.lessons>=1 &&
!player.badges.includes(
"First Step"
)
){

player.badges.push(
"First Step"
);

showReward(
"🏆 Badge Earned!"
);


}



if(
player.streak>=7 &&
!player.badges.includes(
"Week Warrior"
)
){

player.badges.push(
"Week Warrior"
);

}



savePlayer(player);


}

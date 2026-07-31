function getPlayer(){


let player =
localStorage.getItem(
"kidgenius_player"
);



if(!player){


player={

name:"Learner",

xp:0,

stars:0,

level:1,

streak:0,

lessons:0,

mathPerfect:0,

badges:[]

};


savePlayer(player);

}


return JSON.parse(
localStorage.getItem(
"kidgenius_player"
)
);


}



function savePlayer(player){

localStorage.setItem(
"kidgenius_player",
JSON.stringify(player)
);

}

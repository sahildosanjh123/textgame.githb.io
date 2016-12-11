var country;
var battlePrompt;
var story;
var doorSelected = prompt("You wake up in a room with a single door. The door is unlocked. Do you want to open the door?");

if (doorSelected == 'yes'.toLowerCase()) {
  alert("You open door one and your are in the middle of a warzone")

}

//Choosing sides in the battle
//Canada's story is country 1
//America's story is country 2
//India's story is country 3

var chooseSide = prompt("You see three flags and the flags are Canada, America, India which side do you choose");
if (chooseSide == 'Canada'.toLowerCase()) {
  country = 1;
  var canadaBattlePrompt = prompt("Donald trump is the new tyrant and has started WW3 you see a tank and you see him will you blow him up??");
  if (canadaBattlePrompt === "yes".toLowerCase()) {
    battlePrompt = true;
  } else {
    battlePrompt = false;
    alert("Game Over!");
  }
} else if (chooseSide == 'America'.toLowerCase()) {
  country = 2;
  var americaBattlePrompt = prompt("You have chosen America this is the end Trump has oreders you to nuke all of asia and end it all. Do you want to proceed?");
  if (americaBattlePrompt === "yes".toLowerCase()) {
    battlePrompt = true;
  } else {
    battlePrompt = false;
    alert("Game Over!".toLowerCase());
  }
} else if (chooseSide == 'India') {
  country = 3;
  var indiaBattlePrompt = prompt("You have chosen Indian and the next Mahatma Ghandi is actually holding an AR and ready to rip it up, England is trying to take over again but it won't work this time because we are LOADED with firearms and you se the general of the England army will you kill him or hold him hostage. Will you continue?")
  if (indiaBattlePrompt === "yes".toLowerCase()) {
    battlePrompt = true;
  } else {
    battlePrompt = false;
    alert("Game Over!");
  }
}
//Canada's story
if (country === 1 && battlePrompt === true) {
  alert("You've selected to battle on the side of Canada".toLowerCase());
  story = 1;
  alert("You've just Done something important");
  var canadaSniperPrompt = prompt(" When coming back from killing the tyrant Donald Trump you have to find shelter, when you find shelter you see  men launching  mortars at the shelter, then  Commander Jared tells you to go on the roof and scout as well as take the enemies out with a sniper. You are about to kill them but winds start blowing at immense speeds. So you get down for cover and when the wind starts clearing up and as you ascend from the ground the men are gone but they come back with a hostage are you willing to kill them and sacrificing the hostage or will you give up and let them take you in.??!!");
  if (canadaSniperPrompt === "kill hostage".toLowerCase()) {
    battlePrompt = true;
    alert("You killed the hostage and you killed the enemies, and you know you won't be able to live with your self but you have to move on.");
  } else {
    battlePrompt = false;
    alert('You tried being a hero but they took you in and slashed you into  nothing but blood and broken bones.');
  }
  var canadaSniperContinuedPrompt = prompt("As you continue your journey  your group are one of the only ones left as America is destroying everything and Canada is almost out of weapons as well as almost being taken over by America but you and your team will give it a fighting chance you come across a town that is full of the enemies but their leader Trump is there and you can get a view from all the way in the cliffs above the town and now you have good experience with a sniper so will you shoot him or no");
  if (canadaSniperContinuedPrompt === 'yes'.toLowerCase()) {
    battlePrompt = true;
    alert('YOUVE KILLED HIM CONGRADULATIONS YOU WON!!!!!');
  } else {
    battlePrompt = false;
    alert('You should have killed him, now one of his people saw you and he tanked your group GAMEOVER YOU TRIED!!!!!!');
  }

}



//America's story
if (country === 2 && battlePrompt === true) {
  alert("You've selected to battle on the side of America");
  story = 2;
  alert("You've just done something horrifying and gruesome and you know that.");
  var getRevengePrompt = prompt('You feel guilty for  massacring Asia, You go to the leader Trump and try to kill him , you are allowed to go in his office and kill him and you guys have a conversation about what happened in Asia and he was smirking and laughing, you take out your knife and try to kill him but little did you know he had military training he makes you plead for your life if you want to survive. Will you plead.');
  if (getRevengePrompt === 'No'.toLowerCase() || getRevengePrompt === 'Yes'.toLowerCase()) {
    battlePrompt = true;
    alert("You didnt plead but he is a tyrant so he stilled killed you and he is heartless like 21 savage!!!! GAME OVER")
  } else {
    battlePrompt = false;
    alert("You pleaded  but he is  a tyrant after all so he killed you. GAME OVER")
  }
}

//India's Story
if (country === 3 && battlePrompt === true) {
  alert("You've selected to battle on the side of India");
  story = 3;
  alert("Youve chosen India and now you are fighting side beside the new MAHATMA GHANDI  and this team hes not so peacefull hes got guns loaded and hes ready to go he said.");
  var indiaStoryPrompt = prompt("Are you ready");
  if (indiaStoryPrompt === 'yes'.toLowerCase())
    battlePrompt = true;
  alert("Mahamtma Ghandi went in rampageand killed everybody.");
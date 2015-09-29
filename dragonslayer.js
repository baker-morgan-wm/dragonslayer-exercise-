/**
 * Created by session2 on 9/28/15.
 */
var slaying = true
var youHit =Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0
var name = prompt("Your name?");
alert( name + " ,you today  will do battle with the monstrous Donald Trump. Pray the gods will down on you with favor. ");
while(slaying) {
    if(youHit){
        console.log("You hit!");
        totalDamage += damageThisRound;
        if(totalDamage >= 10) {
            console.log("You win!");
            slaying = false;
        } else{
            youHit = Math.floor(Math.random()*2);
        }
    } else {
        console.log("You lose!");

        slaying = false;
    }
}
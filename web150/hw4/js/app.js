var sumScore = 0;
var count = 0;
var score = parseInt(prompt("Enter the score \n or enter 999 to end entried"));
while(score !=999) {
sumScore=sumScore+score;
count++;
var score = parseInt(prompt("Enter the score \n or enter 999 to end entried"));
}
var avg = sumScore/count;
document.write("Average score is "+ " " + avg );



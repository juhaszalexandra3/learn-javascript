let num = Math.floor(100*Math.random());
let guess = prompt("Make a guess");
while((guess != num) && (guess != null)) {
    if(guess < num)
    {
        guess = prompt("Too low, try again");
    }
    else
    {
        guess = prompt("Too high, try again");
    }
    
}
if(guess == num)
{
    alert("Wow, it's like you can read my mind.");
} else {
    alert("I thought you liked playing with me :( ");
}
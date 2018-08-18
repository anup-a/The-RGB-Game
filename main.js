var q = document.querySelector(".que p span");
var p = document.querySelector(".que p");
var squarelsit = document.querySelectorAll(".squares");
var banner = document.getElementsByClassName("top-banner");
var heading = document.querySelector("h1");
var reset = document.querySelectorAll(".reset");
var s = document.querySelector(".scores span")
var colorArray;
var body = document.querySelector("body");


function bannercolorReset(a)
{
    banner[0].style.backgroundColor = a;
}
function randomcolor()
{
    var a,b,c;
    a = Math.floor(Math.random() * 255).toString();
    b = Math.floor(Math.random() * 255).toString();
    c = Math.floor(Math.random() * 255).toString();
    var color = "rgb("+ a +", " + b + ", " + c + ")";
    return color;
}
function winner(a,score)
{
    q.innerHTML = "You are correct";
    bannercolorReset(a);
    body.style.backgroundImage = "linear-gradient(0deg,rgba("+a.slice(4,a.length-1)+",0.3),rgba("+a.slice(4,a.length-1)+",0.3)),url(andrej-chudy-16304-unsplash.jpg)";
    console.log("Hi");
    console.log("linear-gradient(0deg,rgba("+a.slice(4,a.length-1)+",0.3),rgba("+a.slice(4,a.length-1)+",0.3)),url(andrej-chudy-16304-unsplash.jpg)");
    s.innerHTML = score;
    for(i=0;i<6;i++)
    {
        squarelsit[i].style.backgroundColor = a;
    }


}


function StartGame()
{
    
    colorArray = [];
    var Scores = 60;
    for(i = 0; i < 6;i++)
    {
        var newcolor = randomcolor();
        colorArray.push(newcolor);
        squarelsit[i].style.backgroundColor = newcolor;
    }
    
    Selected = Math.floor(Math.random()*5);

    q.innerHTML = colorArray[Selected];
    console.log("StartGameclass",colorArray,colorArray[Selected]);
    for(i=0;i<6;i++)
    {
        squarelsit[i].addEventListener("click",function(){
            console.log(this.style.backgroundColor ,colorArray[Selected]);

            if( this.style.backgroundColor == colorArray[Selected] )
            {

               winner(this.style.backgroundColor,Scores);
            }
            else{
                this.style.background = "transparent";
                Scores = Scores - 10;
            }

        })
    }
}

reset[0].addEventListener("click",function(){
    colorArray.splice(0);
    s.innerHTML = 0;
    bannercolorReset("gray");
    StartGame();
});
reset[1].addEventListener("click",function(){
    colorArray.splice(0);
    s.innerHTML = 0;
    bannercolorReset("gray");
    StartGame();
});

StartGame();
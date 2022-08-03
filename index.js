function rollthedice(){
    setTimeout(function(){
        let randnumber1=Math.floor(Math.random()*6)+1;
        let randnumber2=Math.floor(Math.random()*6)+1;

        document.querySelector(".img1").setAttribute("src","dice" + randnumber1 +".png");
        document.querySelector(".img2").setAttribute("src","dice" + randnumber2 +".png");
        if(randnumber1===randnumber2){
            document.querySelector("h1").innerHTML="Draw!";
        }
        else if(randnumber1<randnumber2){
            document.querySelector("h1").innerHTML="player 2 wins!";
        }
        else {
            document.querySelector("h1").innerHTML="player 1 Wins!";
        }
    },2000);
 }

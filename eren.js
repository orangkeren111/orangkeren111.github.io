const eren = document.getElementById("eren"); 
const enemy = document.getElementById("enemy"); 
var poin = 0;
var noLevi = true;
function jump(e) { 
    const eren = document.getElementById("eren"); 
    if (eren!=null){
        if (e.key === " "){
            if (eren.classList != "jump") { 
                eren.classList.add("jump"); 
                setTimeout(function () {
                eren.classList.remove("jump"); 
                }, 500); }
        }
    }
    if (e.key === "t"){
        if (eren!=null){
            $("#eren").remove();
            $("#game").append("<div id='titan'></div>");
        } else{
            $("#titan").remove();
            $("#game").append("<div id='eren'></div>");
        }
    }
    } 
let checkAlive = setInterval(function () { 
    let eren = document.getElementById("eren"); 
    let enemy = document.getElementById("enemy");
    let levi = document.getElementById("levi");
    let titan = document.getElementById("titan");
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left") );
    if(enemyLeft>= 360 && enemyLeft<=370){
        poin++;
        document.getElementById("point").innerHTML = poin;
    }
    if (poin == 5 && noLevi){
        noLevi = false;
        $("#game").append("<div id='levi'></div>");
    }
    if (poin == 50){
        enemy.style.animationPlayState = "paused"; alert("Congratss :)!!"); window.location.href ="characters.html"; 
    }
    if (eren!=null){
        let erenTop = parseInt(window.getComputedStyle(eren).getPropertyValue("top") ); 
        if (enemyLeft > 300 && enemyLeft <= 370) {
            if (erenTop >= 143){
                eren.style.animationPlayState = "paused"; enemy.style.animationPlayState = "paused"; alert("Whoops! Game Over :("); window.location.href ="characters.html"; 
            }
    } 
    }
    if (levi!=null){
        if (eren == null){
            let leviLeft = parseInt(window.getComputedStyle(levi).getPropertyValue("left") );
            if (leviLeft > 250 && leviLeft <= 370) {
                titan.style.animationPlayState = "paused"; enemy.style.animationPlayState = "paused"; alert("Whoops! Game Over :("); window.location.href ="characters.html"; 
            }
        }
    }

    
    }, 20);

document.addEventListener("keydown", function (event) { jump(event); });

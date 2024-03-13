

// function Check(){
//     console.log("done");
// }

// var score = 30

// if (score=="30"){
//     console.log("weak pass");
// }




function Check(){
    let score = document.getElementById("score").value
    if (score=="" ){
        document.getElementById("result").innerHTML = "Input a value"
    }else if( score >=0 && score < 40){
        document.getElementById("result").innerHTML = "F - Fail"
        var songFailure = new Audio(`audio/Boo! sound effect.mp3`)
        songFailure.play()
    }else if ( score >= 40 && score < 45){
    document.getElementById("result").innerHTML = "E  - Woeful performance"
    } else if ( score >= 46 && score < 50){
        document.getElementById("result"). innerHTML = "D - Weak Pass"
    } else if (score >= 50 && score < 59){
        document.getElementById("result").innerHTML = "C - Good but put in more effort"
    } else if (score >= 60 && score < 69){
        document.getElementById("result").innerHTML = "B - That was very good"
    }    else if (score >= 70 && score < 100){
        document.getElementById("result").innerHTML = "A - That was excellent"
        var songExcellent = new Audio(`audio/Stand up (For The Champions)-Right Said Fred (Lyrics) _viral _song.mp3`)
        songExcellent.play()
    } else if (score > 100){
        document.getElementById("result").innerHTML = "Invalid Number"
    }  else if(score < 0){
        document.getElementById("result").innerHTML ="Grade is only available for grade range 0-100"
    }
}


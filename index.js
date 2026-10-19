//this sets the score
let homeScore = 0
let homeScoreEl = document.getElementById("homeScore")


let guestScore = 0
let guestScoreEl = document.getElementById("guestScore")


document.getElementById("guestScore").textContent = guestScore
document.getElementById("homeScore").textContent = homeScore



//now i need to set the fuinctions for the button

function clickHome(){
    homeScore += 1
    document.getElementById("homeScore").textContent = homeScore
}
        
  
  
function clickGuest(){
    guestScore += 1
    document.getElementById("guestScore").textContent = guestScore
}      
        
//this is the function for the 2nd button for the +2


function clickHome2(){
    homeScore += 2
    document.getElementById("homeScore").textContent = homeScore
}


function clickGuest2(){
    guestScore += 2
    document.getElementById("guestScore").textContent = guestScore
}


function resetScore(){
    homeScore = 0
    guestScore = 0
    
    document.getElementById("homeScore").textContent = homeScore
    document.getElementById("guestScore").textContent = guestScore


}
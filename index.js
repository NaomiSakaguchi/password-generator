const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1El = document.getElementById("pwd1-el")
let pwd2El = document.getElementById("pwd2-el")

function generate(){
    
    let pwd1 = ""
    let pwd2 = ""
    
    for(let i=0; i<16; i++){
        let pwd1Index = Math.floor(Math.random() * characters.length)
        pwd1 += characters[pwd1Index]
    }
    pwd1El.textContent = pwd1
    
    for(let i=0; i<16; i++){
    let pwd2Index = Math.floor(Math.random() * characters.length)
    pwd2 += characters[pwd2Index]
    }
    pwd2El.textContent = pwd2

}

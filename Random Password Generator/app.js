let password = document.getElementById("password")

function createPassword(){

    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ()!@#$%^&*";
    let passwordLength = 12;
    let password = "";

    for (var i=0; i<=passwordLength-1; i++){
        let randomNumber = Math.floor(Math.random()*characters.length);
        password += characters.substring(randomNumber,randomNumber +1);
    }

    document.getElementById("password").value = password
}

function copy(){
    let copyText = document.getElementById("password")
    navigator.clipboard.writeText(copyText.value)
    
    alert("Password Copied")    
}




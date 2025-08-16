//welcomespeech();

//call the function to welcome speech
function welcomespeech() {
    let username = prompt("What is your name ?");
    alert("Welcome" + username + "to My Portofolio");
    if (username !='') {
        document.getElementById("user-greeting").textContent = username;
        }
    }

welcomespeech();

function sendname(){
    let message = document.getElementById("user-name").value;
    if (message != "") {
        alert("message sent" + message);
    } else{
        alert("Please enter a message before sending");
    }
}

function sendphonenumber(){
    let message = document.getElementById("user-phone-number").value;
    if (message != "") {
        alert("message sent" + message);
    } else{
        alert("Please enter a message before sending");
    }
}

function sendemail(){
    let message = document.getElementById("user-email").value;
    if (message != "") {
        alert("message sent" + message);
    } else{
        alert("Please enter a message before sending");
    }
}

function sendmessage(){
    let message = document.getElementById("user-message").value;
    if (message != "") {
        alert("message sent" + message);
    } else{
        alert("Please enter a message before sending");
    }
}

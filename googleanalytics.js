var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var string_length = 8;
var randomstring = '';
for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
}

const inputField = document.getElementById("inputArea");
const email = document.getElementById("email");
const passwort = document.getElementById("passwort");

inputField.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') {
        if (inputField.value == randomstring) {
            email.innerHTML = "eMail: halt meine e-mail";
            passwort.innerHTML = "passwort: irgdendwas";
        } else {
            alert("falsch");
        }
    }
}
);

function vercod() {
    var char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    var code = '';
    var m = Math.floor(Math.random() * 36)
    for (i = 0; i < 4; i++) {
        code += char[m];
    }
    document.getElementById('vc').textContent = code;
}

function sub() {
    var mail = document.getElementById('mail').value;
    var num = document.getElementById('number').value;
    var pw1 = document.getElementById('pwd1').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^1[0-9]{10}$/;
    if (mail.match(mailformat)) {
        if (num.match(phoneno)) {
            if () {

            } else {

            }
        } else {
            alert("Please enter a valid number");
            return false;
        }
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }

}
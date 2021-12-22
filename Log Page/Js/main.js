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
    var name = document.getElementById('mail').value;
    var pwd = document.getElementById('pwd').value;
    var otp = document.getElementById('otp').value;
    var cotp = document.getElementById("vc").innerHTML;
    var chk = document.getElementById('cb');

    if (pwd.length < 5) {
        window.alert('Password must be 6 or more.')
    } else {
        if (name == 'momin1234' && pwd == '912345678') {
            if (otp == cotp) {
                if (chk.checked == 1) {
                    window.alert('Login Success!')
                    window.open('../index.html')
                } else {
                    window.alert('please check the box')
                }
            } else {
                window.alert('Sorry!Wrong OTP.')
            }
        } else {
            window.alert('Sorry!Your user name or password may be wrong!')
        }
    }
}
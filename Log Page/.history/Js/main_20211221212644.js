function vercod() {
    //     var char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C',
    //         'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    //         'U', 'V', 'W', 'X', 'Y', 'Z'
    //     ]
    //     var code = '';
    //     var m = Math.floor(Math.random() * 36)
    //     for (i = 0; i < 4; i++) {
    //         code += char[m];
    //     }
    //     document.getElementById('vc').textContent = code;
    // }        var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var oDiv = document.getElementById('code');

    function getRandom(n, m) {
        n = Number(n);
        m = Number(m);
        if (n > m) {
            var temp = n;
            n = m;
            m = temp;
        }
        return Math.floor(Math.random() * (m - n) + n);
    }

    function getCode() {
        var str = '';
        //  There are several digits in the verification code
        for (var i = 0; i < 4; i++) {
            var ran = getRandom(0, 62);
            str += codeStr.charAt(ran);
        }
        oDiv.innerHTML = str;
    }
    getCode(); //  Call the function, the page refresh will also refresh the verification code
    //  Click Refresh verification code
    oDiv.onclick = function() {
        getCode();

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
            if (name == 'songwei' && pwd == 'aa1122bb') {
                if (otp == cotp) {
                    if (chk.checked == 1) {
                        window.alert('Login Success!')
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
}
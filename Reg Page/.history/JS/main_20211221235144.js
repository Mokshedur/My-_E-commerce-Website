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
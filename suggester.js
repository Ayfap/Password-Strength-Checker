const list=["!","@","#","$","%","^","&","*","!@","@#","#$","$%","%^","^&","&*","**","&&","%%","$$","##","@@","!!"]
sym = "<option disabled selected>Select a Symbol</option>";

for(var i = 0;i< list.length; i++) {
    sym += ("<option>" + list[i] + "</option>");
}
document.getElementById("symbol").innerHTML = sym;

function suggestStrongPassword() {
    
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    var str3 = document.getElementById("symbol");
    var str4 = str3.options[str3.selectedIndex].text;
    var combine = str1 + str2+str4;
    var sug = GenPass(combine);
    if(sug.length<8){
        document.getElementById("result").innerText = "Password Length must be atleast 8";
    } else {
        document.getElementById("result").innerText = "Suggested Strong Password: " + sug;
    }
}

function GenPass(str) {
    var array = str.split('');
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join('');
}

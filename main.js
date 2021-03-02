var length = document.getElementsByClassName('funcRun');

var myfunction = (e) => {
    var store = e.target.innerText;
    function display_run(store) {
        if(store != "C"){
        document.getElementById('display').innerText += store; }
    }
    function solution() {
        let x = document.getElementById("display").innerText
        let y = eval(x)
        document.getElementById("answer").innerText = "=" + y;
    }
    function clearScreen() {
        document.getElementById("display").innerText = ""
        document.getElementById("answer").innerText = "="
    }

    if(store == "C"){
        clearScreen();
    }
    if(store != '='){
        display_run(store);
    }else{
        solution();
    }
    
}
for (var i = 0; i < length.length; i++) {
    length[i].addEventListener('click', myfunction);
}
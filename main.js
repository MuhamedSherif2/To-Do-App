let boys = document.getElementById("boys")
let btn1 = document.getElementById("btn1")
let nameBoy =["Farouk","Mohammed","Amr","Ramadan","John","Mostfa","Waleed","Omar", "Eslam", "Ameer", "Ali"]
btn1.onclick = function(){
    var winner = nameBoy[Math.floor( Math.random() * nameBoy.length)]
    boys.innerHTML = winner;
}



let girls = document.getElementById("girls")
let btn2 = document.getElementById("btn2")
let nameGirl =["Joudy","Lilyan","Rana","Engy","Habiba","Maya","Mariam","Khadija", "Zeinab", "Asmaa"]
btn2.onclick = function(){
    var winner = nameGirl[Math.floor(Math.random() * nameGirl.length)]
    girls.innerHTML = winner;
}
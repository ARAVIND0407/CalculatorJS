function save(val){
    document.getElementById("inpt").value +=val;
}
function equ(){
    var statment=document.getElementById('inpt').value
    var result=eval(statment)
    document.getElementById("inpt").value = result;
}
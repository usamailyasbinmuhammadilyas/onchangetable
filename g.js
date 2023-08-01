function input() {
    let number= document.getElementById('in').value
    document.getElementById('heading').innerHTML=''
    for (let index = 1; index <11; index++) 
      { document.getElementById("heading").innerHTML+=
        number + "x" +  +index  +"="   +number*index+  "<br>"}
}
function remove(){
    var text = document.getElementById("no");
    var no = text.value;
    console.log(no)
    if(no!=1){
        var newno = no-1;
        text.value =  newno;
        console.log(newno);

        var price = document.getElementById("priceforone");
        var total = document.getElementById("total");
        var tot = newno * price.value;
        total.value = tot+".00";

        
    }
   

}

function add(){
    var text = document.getElementById("no");
    var no = text.value;
    console.log(no)
    if((no>=1)&&(no<=100)){
        var newno = ++no;
        text.value =  newno;
        console.log(newno);

        var price = document.getElementById("priceforone");
        var total= document.getElementById("total");
        var tot = newno *price.value;
        total.value = tot +".00";
    } 

}
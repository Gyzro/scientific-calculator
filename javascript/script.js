

var myAns=0;
var incre=0;
var hlef;
var raiz;

function increm (x,y){

    incre=1;



   if (incre==1 ) {
     var temp = x.value;

 //x.value = x.value.slice(0, x.value.length - 1);
 hlef=x.value;
 x.value="" ;
}
}






var mySup = mySupset.sup(0);

function calculate(screen, screen_out) {


    if (hlef>0){
        //alert(hlef);
         screen_out.value = Math.pow(hlef, screen.value);
         var temp = screen.value;
          myAns = screen_out.value;
          screen.value = hlef + "^" + temp;

    }

    else{
    screen_out.value = eval(screen.value);
    myAns = screen_out.value;

}


}

function addChar(input, character) {
    if (input.value == null || input.value == "0") {
        input.value = character;
    } else {

        input.value += character;

    }
}

function cos(x, y) {
    var temp =  "cos" +x.value;
    var radian = Math.PI / 180;
    x.value *= radian;
    y.value = Math.cos(x.value);

    x.value = temp;
    myAns = screen_out.value;

}

function sin(x, y) {
    var temp = "sin" + x.value;
    var radian = Math.PI / 180;
    x.value *= radian;
    y.value = Math.sin(x.value);

    x.value = temp;

    myAns = screen_out.value;

}

function tan(x, y) {
     var temp = "tan" + x.value;
    var radian = Math.PI / 180;
    x.value *= radian;
    y.value = Math.tan(x.value);

    x.value = temp;
    myAns = screen_out.value;
}



function delt(x, y) {
    x.value = x.value.slice(0, x.value.length - 1);

}



function squarerot(x, y) {

      var temp = x.value;
    y.value = Math.sqrt(x.value);


x.value = "sqrt " + temp;
    myAns = screen_out.value;
}

function squar(x, y) {
    var temp = x.value;
    x.value *= x.value;
    y.value = x.value;

    x.value = temp + "^2";
    myAns = screen_out.value;
}


function sin_inverse(x, y) {
     var temp = "arcsin "  + x.value;
    y.value = Math.asin(x.value);
    var radian = Math.PI / 180;
    y.value /= radian;

     x.value = temp;
    myAns = screen_out.value;
}

function cos_inverse(x, y) {

    var temp = "arccos " + x.value;
    y.value = Math.acos(x.value);
    var radian = Math.PI / 180;
    y.value /= radian;
     x.value = temp;
    myAns = screen_out.value;
}

function tan_inverse(x, y) {

    var temp = "arctan " + x.value;
    y.value = Math.atan(x.value);
    var radian = Math.PI / 180;
    y.value /= radian;
    x.value = temp;
    myAns = screen_out.value;
}

function sto(x,y) {
  x.value = "";
  y.value = "";
    x.value = myAns;
    y.value = myAns;
  //  y.value= x.value;
  //  x.value="";

}



function get_rid(x, y) {
    myAns=y.value;
    x.value = "";
    y.value = "";
}

function exporais(x, y) {

     var temp =  "E^"+x.value;


    y.value = Math.exp(x.value);

    x.value = temp;

    myAns = screen_out.value;
}


function expo(x, y) {
    var temp =  "E";
    y.value = Math.E;

    x.value = temp;

    myAns = screen_out.value;
}






function raize(x) {

    function raizup() {

    }

}


function raiz10(w, x, y) {

    var temp = y.value;
    y.value = Math.pow(x, y.value);
    w.value = y.value;

    y.value = "10 ^ " + temp;

    myAns = screen_out.value;
}

function loga(x, y) {
     var temp = x.value;
    y.value = Math.log10(x.value);

    x.value = "log " + temp;
    myAns = screen_out.value;
}

function logeu(x, y) {
     var temp = "LOG e " + x.value;
    y.value = Math.log(x.value);


 x.value = temp;
    myAns = screen_out.value;
}

function factori(x, y) {
    var temp1 = 1;
    var tempx = x.value;
    for (var i = x.value; i >= 1; i--) {
        x.value *= i;

    }
    x.value /= tempx;

    y.value = x.value;

    x.value = tempx + "!";

    myAns = screen_out.value;
}

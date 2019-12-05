
function sleep_in(weekday,vacation) {
    if(weekday ==  vacation ) {
        return true;
    }

    if(weekday == true && vacation == false) {
        return false;
    }
    if(weekday == false && vacation == true) {
        return true;
    }
}

function monkey_trouble(a_smile, b_smile){
    if (a_smile == b_smile){
        return true;
    }
    if(a_smile==true && b_smile==false){
        return false;
    }
    if(a_smile==false && b_smile==true){
        return false;
    }
}

function string_times(string,n) {
    var answer = "";
    for (var i = 0; i < n; i++) {
        answer += string;
    }
    return answer;
}

function front_times(string,n){
    var first3 = string.substring(0,3);
    var answer = "";
    for (var i = 0; i < n; i++) {
        answer = answer + first3;
    }
    return answer;
}

function string_bits(string){
    var answer = "";
    for (var i = 0; i < string.length; i++) {
        if(i%2== 0){
            answer = answer + (string.substring(i,i+1));
        }
    }
    return answer;
}

function caughtSpeeding(speed,birthday){
    if(birthday==true){
        speed = speed-5;
    }
    if(speed<=60){
        return 0;
    }
    if(speed>=61 && speed<=80){
        return 1;
    }
    if(speed>=81){
        return 2;
    }
}

function teaParty(tea,candy){
    if( (tea>=5 && candy>=5)&&(tea<(2*candy))&&(candy<(2*tea)) ){
        return 1;
    }
    if( tea<5 || candy<5 ){
        return 0;
    }
    if( tea>= (2*candy) ){
        return 2;
    }
    if( candy>=(2*tea) ){
        return 2;
    }
}

function blackjack(avalue,bvalue){
    if(avalue>bvalue && avalue<=21){
        return avalue;
    }
    if(bvalue>avalue && bvalue<=21){
        return bvalue;
    }
    if(avalue>21 && bvalue>21){
        return 0;
    }
    if(avalue<bvalue && bvalue>21 && avalue<21){
        return avalue;
    }
    if(bvalue<avalue && avalue>21 && bvalue<21){
        return bvalue;
    }
}

function loneSum(a,b,c){
    if(a==b && b!=c){
        return c;
    }
    if(b==c && a!=b){
        return a;
    }
    if(a==c && b!=c){
        return b;
    }
    if(a==b && b==c){
        return 0;
    }
    if(a!=b!=c){
        return a+b+c;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}


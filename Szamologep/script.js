
/*
function Osszeadas() {

    var first_num = document.getElementById("num_1").value;
    var second_num = document.getElementById("num_2").value;
    var result = parseFloat(first_num) + parseFloat(second_num);

    document.getElementById("eredmeny").innerText = result;

}

function Kivonas() {

    var first_num = document.getElementById("num_1").value;
    var second_num = document.getElementById("num_2").value;
    var result = parseFloat(first_num) - parseFloat(second_num);

    document.getElementById("eredmeny").innerText = result;

}

function Szorzas() {

    var first_num = document.getElementById("num_1").value;
    var second_num = document.getElementById("num_2").value;
    var result = parseFloat(first_num) * parseFloat(second_num);

    document.getElementById("eredmeny").innerText = result;

}

function Osztas() {

    var first_num = document.getElementById("num_1").value;
    var second_num = document.getElementById("num_2").value;
    var result = parseFloat(first_num) / parseFloat(second_num);

    document.getElementById("eredmeny").innerText = result;

}
*/
function Calculation(muvelet) {
    var first_num = document.getElementById("num_1").value;
    var second_num = document.getElementById("num_2").value;

    if(muvelet=="+") {
        var result = parseFloat(first_num) + parseFloat(second_num);
    }
    else if(muvelet=="-") {
        var result = parseFloat(first_num) - parseFloat(second_num);
    }
    else if(muvelet=="*") {
        var result = parseFloat(first_num) * parseFloat(second_num);
    }
    else if(muvelet=="/") {
        var result = parseFloat(first_num) / parseFloat(second_num);
    }

    document.getElementById("eredmeny").innerText = result;

}

function Osszeadas() {
    Calculation("+");
}
function Kivonas() {
    Calculation("-");
}
function Szorzas() {
    Calculation("*");
}
function Osztas() {
    Calculation("/");
}

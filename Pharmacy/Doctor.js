"use strict";
var doctorList = ["apurva ss", "srinivas kg", "munna mbbs"];
function showDoctors() {
    var i = 0;
    doctorList.forEach(function (element) {
        // console.log(element);
        alert(++i + " DR. " + element);
    });
}

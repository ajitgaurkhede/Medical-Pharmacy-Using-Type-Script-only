"use strict";
var list = {
    brand: [],
    price: [],
    quantity: []
};
/* let medicineList: Array<string> = new Array();
function addMedicine() {
  let medicine = (<HTMLInputElement>document.getElementById("input")).value;
  medicineList.push(medicine);
} */
//let medicineList: Array<list> = new Array();
function addMedicine() {
    var medicineName = document.getElementById("inputMedicine").value;
    var medicinePrice = document.getElementById("inputPrice").value;
    var medicineQuant = document.getElementById("inputQuant").value;
    list.brand.push(medicineName);
    list.price.push(medicinePrice);
    list.quantity.push(medicineQuant);
}
function showMedicines() {
    var i = 0;
    for (var _i = 0, _a = list.brand; _i < _a.length; _i++) {
        var x = _a[_i];
        // alert(++i+" Medicine Name : "+x);
        console.log(x);
    }
}
//searchMedicine
function searchMedicine() {
    var medicine = (document.getElementById("searchMedicine")).value;
    if (list.brand.indexOf(medicine) != -1)
        alert("medicine is founded");
    else
        alert("medicine is not founded");
}

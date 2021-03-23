"use strict";
function makeOrder() {
    var medicines = (document.getElementById("orderMedicine")).value;
    var quantityMed = (document.getElementById("orderMedicineQuant")).value;
    //orderMedicineQuant
    var quantity = parseInt(quantityMed);
    if (list.brand.indexOf(medicines) == -1)
        alert("medicine not available");
    else {
        alert("order sucessful \n" + " medicine name: " + medicines + "\n Quantity : " + quantity);
    }
}


function makeOrder() {
  let medicines: string = (<HTMLInputElement>(
    document.getElementById("orderMedicine")
  )).value;

  let quantityMed = (<HTMLInputElement>(
    document.getElementById("orderMedicineQuant")
  )).value;
//orderMedicineQuant
    let quantity = parseInt(quantityMed);

  if (list.brand.indexOf(medicines) == -1) 
  alert("medicine not available");
  else {
          alert("order sucessful \n"+" medicine name: "+medicines+"\n Quantity : " +quantity);
  }

}

let list: {
  brand: string[]
  price: string[]
  quantity: string[]
}={

    brand: [],
    price: [],
    quantity:[]
};




/* let medicineList: Array<string> = new Array();
function addMedicine() {
  let medicine = (<HTMLInputElement>document.getElementById("input")).value;
  medicineList.push(medicine);
} */

//let medicineList: Array<list> = new Array();
function addMedicine() {
  let medicineName = (<HTMLInputElement>document.getElementById("inputMedicine")).value;
  let medicinePrice=(<HTMLInputElement>document.getElementById("inputPrice")).value;
  let medicineQuant = (<HTMLInputElement>document.getElementById("inputQuant")).value;

  list.brand.push(medicineName);
  list.price.push(medicinePrice);
  list.quantity.push(medicineQuant);
  
}

function showMedicines(){
  let i = 0 ;
  for (let x of list.brand) {
   // alert(++i+" Medicine Name : "+x);
   console.log(x);

  }

}

//searchMedicine
function searchMedicine() {
  let medicine: string = (<HTMLInputElement>(
    document.getElementById("searchMedicine")
  )).value;
  if (list.brand.indexOf(medicine) != -1) alert("medicine is founded");
  else alert("medicine is not founded");
}




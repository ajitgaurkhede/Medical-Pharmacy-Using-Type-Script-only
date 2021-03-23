let doctorList = ["apurva ss","srinivas kg", "munna mbbs"];

function showDoctors(){
    let i =0;
doctorList.forEach(element => {
   // console.log(element);
    alert(++i+" DR. " + element);
});

}
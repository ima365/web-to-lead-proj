function beforesubmit() {
    let inputdate = document.querySelector('.inputdate');
    let outputdate = document.querySelector('.outputdate');
    console.log("input date value", inputdate.value);  // string -->  date (en_CA)
    console.log('data type ', typeof inputdate.value);  

    let formattedDate = new Date(inputdate.value).toLocaleDateString('en-CA');

    // set the formatted date into the second variable
    outputdate.value = formattedDate;

}
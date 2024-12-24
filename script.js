let captchaChecked = false;

function beforesubmit(event) {
    if(captchaChecked) {
        let inputdate = document.querySelector('.inputdate');
        let outputdate = document.querySelector('.outputdate');
        //console.log("input date value", inputdate.value);  // string -->  date (en_CA)
        //console.log('data type ', typeof inputdate.value);  
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString('en-CA');
    
        // set the formatted date into the second variable
        outputdate.value = formattedDate;
    } else {
        alert('Please check the reCaptcha box to submit the form');
        event.preventDefault();
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
        document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
        JSON.stringify(elems);
    }
}
setInterval(timestamp, 500); 

function reCaptchaSuccess() {
    captchaChecked = !captchaChecked;
}

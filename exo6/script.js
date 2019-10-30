function checkPhoneNumber(){
    var number = document.querySelector('#phone').value;
    var numRegexp = new RegExp(/^0[167]/);
    if (numRegexp.exec(number)) {
        console.log('true');
        return true;
    }
    else{
        console.log('false');
        return false;
    }
}

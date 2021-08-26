function generatePin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        document.getElementById('generated-pin').value = pin;;
    }
    else{
        console.log('3 degit came')
        return generatePin();
        // document.getElementById('generated-pin').value = pin;
    }
    console.log(pin);
}
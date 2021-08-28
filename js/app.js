function generatePin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        document.getElementById('generated-pin').value = pin;;
    }
    else{
        console.log('3 degit came')
        return generatePin();
        
    }
}



document.getElementById('key-pad').addEventListener('click',function(event){    
    const newInput = event.target.innerText;
    const inputField =document.getElementById('typed-pin');
    if(isNaN(newInput)){
        if(newInput == 'C'){
            inputField.value = '';
        }
    }
    else{
        
        const previousInput = inputField.value;
        const newInputField = previousInput + newInput;
        inputField.value = newInputField;
    }
    
})
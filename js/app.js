function generatePin(){
    const pin = Math.round(Math.random()*10000);
    //to make the pin number to string
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
        /* else if (newInput == '<'){
            inputField.value == inputField.pop();
        } */
    }
    else{
        
        const previousInput = inputField.value;
        const newInputField =previousInput + newInput ;
        inputField.value = newInputField;
    }
    
})

document.getElementById('submit').addEventListener('click',function(){
    const pin = document.getElementById('generated-pin').value;
    const typedPin= document.getElementById('typed-pin').value;
    const passMassage =document.getElementById('pin-pass');
    const failError = document.getElementById('pin-fail');
    if (pin == typedPin){        
        passMassage.style.display = 'block';
        failError.style.display = 'none';

    }
    else{
        failError.style.display = 'block';
        passMassage.style.display = 'none';
    }

    
})
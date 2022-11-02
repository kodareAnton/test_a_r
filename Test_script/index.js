// gör en funtion som tar upp värdet med hjälp av en input
function sendText(){
    const inputName = document.getElementById('name')
    console.log(inputName.value);

    // if sats som säger vad som ska hända när andra saker händer
     if(inputName.value === ''){
        console.log('du behöver skriva nått');
     }
     else{
        console.log(inputName.value);
     }
}
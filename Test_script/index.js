// gör en funtion som tar upp värdet med hjälp av en input
// function sendText(){
//     const inputName = document.getElementById('name')
//     console.log(inputName.value);

//     // if sats som säger vad som ska hända när andra saker händer
//      if(inputName.value === ''){
//         console.log('du behöver skriva nått');
//      }
//      else{
//         console.log(inputName.value);
//      }
// }

// fixar så man byter färg på backgrunden
// function AboutTheColor(){

//    const header = document.getElementById('header')

//    if(header.style.backgroundColor = 'red'){
//       header.style.backgroundColor = 'blue'
//       console.log('blue');
//    }else{
//       console.log('not red');
//    }
// }

function setLocalStorage(){

   const box = document.getElementById('box')
   const fName = document.getElementById('name')

   localStorage.parse("fName", JSON.stringify(fName))
   
// skapar en btn i html under boxdiv
   var removeBtn = document.createElement('button')
   removeBtn.innerText = 'remove'
   removeBtn.id = 'removeBtn'
   removeBtn.onclick = clearLocalStorage
   box.appendChild(removeBtn)
}

function getLocalStorage(){

   var x = localStorage.setItem("name")
   console.log(x);
}

// rensar sessionStorage
function clearLocalStorage(){
   localStorage.clear()

   var removeBtn = document.getElementById('removeBtn')
   removeBtn.style.display = 'none'
}

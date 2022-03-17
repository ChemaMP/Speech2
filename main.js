const texts = document.querySelector('.texts');
const one = document.getElementById("uno");
const two = document.getElementById("dos");
const three= document.getElementById("tres");
const four = document.getElementById("cuatro");
const five = document.getElementById("cinco");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  console.log(text);
  if(e.results[0].isFinal){
    if (text.includes('lámpara 1') || text.includes("lámpara uno")) {
      one.checked = true;
    }
    if (text.includes('1 fuera') || text.includes("uno fuera") || text.includes("1 Fuera")) {
      one.checked = false;
    }
    if (text.includes('lámpara 2') || text.includes("lámpara dos")) {
      two.checked = true;
    }
    if (text.includes('2 fuera') || text.includes("dos fuera") || text.includes("2 Fuera")) {
      two.checked = false;
    }
    if (text.includes('lámpara 3') || text.includes("lámpara tres")) {
      three.checked = true;
    }
    if (text.includes('3 fuera') || text.includes("tres fuera") || text.includes("3 Fuera")) {
      three.checked = false;
    }
    if (text.includes('lámpara 4') || text.includes("lámpara cuatro")) {
      four.checked = true;
    }
    if (text.includes('4 fuera') || text.includes("cuatro fuera") || text.includes("4 Fuera")) {
      four.checked = false;
    }
    if (text.includes('lámpara 5') || text.includes("lámpara cinco") ) {
      five.checked = true;
    }
    if (text.includes('5 fuera') || text.includes("cinfo fuera") || text.includes("5 Fuera")) {
      five.checked = false;
    }
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
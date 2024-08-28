
const berryNum = document.querySelector('#berry-field')
const btn= document.querySelector('#btn')
const msg = document.querySelector('#msg')

btn.addEventListener('click', function() {
  if(berryNum.value > 9) {
    msg.textContent = 'Congrats'
  } else {
    msg.textContent = 'Sorry'
  }
})


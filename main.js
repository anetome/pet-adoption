const template = document.querySelector('#pet-card-template')
const wrapper = document.createDocumentFragment()

async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector('.temp').textContent = ourTemperature
}

start()


async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('h3').textContent = pet.name
    clone.querySelector('.pet-description').textContent = pet.description
    clone.querySelector('.pet-age').textContent = createAgeText(pet.birthYear) 
    if(!pet.photo) pet.photo = 'images/fallback.jpg'                
    clone.querySelector('.pet-card-photo img').src = pet.photo
    clone.querySelector('.pet-card-photo img').alt = `A ${pet.species} named ${pet.name}`

    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()

function createAgeText(birthYear) {
  let thisYear = new Date().getFullYear()
  let age = thisYear - birthYear
  let ageText = ''
  if(age > 1) {
    ageText = `${age} Years Old`
  } else if(age == 1) {
    ageText = `${age} Year Old`
  } else {
    ageText = `Less then a Year Old`
  }
  return ageText

}








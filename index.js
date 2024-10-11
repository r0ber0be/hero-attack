import { Hero } from "./hero.js"

var buttonStatus = document.getElementById('add-hero-attack')

buttonStatus.addEventListener('click', e => {
  e.preventDefault()
  const name = document.getElementById('hero-name').value
  const age = document.getElementById('hero-age').value
  const type = document.getElementById('hero-type').value

  console.log(name, age, type)
  !name || !age
    ? alert('Insira algum valor')
    : new Hero(name, age, type).attack()
  }
)

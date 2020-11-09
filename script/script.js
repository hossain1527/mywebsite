const langEl = document.querySelector('.langWrap')
const links = document.querySelectorAll('a')
const titleEl = document.querySelector('.title')
const descriptionEl1 = document.querySelector('.description1')
const description1El2 = document.querySelector('.description2')
const descriptionEl3 = document.querySelector('.description3')

links.forEach(element => {
    element.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active')
    element.classList.add('active')
 
    const attr = element.getAttribute('language')

    titleEl.textContent = data[attr].title
    descriptionEl1.textContent = data[attr].description1
    description1El2.textContent = data[attr].description2
    descriptionEl3.textContent = data[attr].description3
    


    })
})

let data = {
    
    "english": {
        "description1":"Inhale Grace",
        "description2":"Exhale Praise",
        "title":"Hey World,",
        "description3":"Sammy is here!"
        
    },

    "portuguese": {
        "description1":"Inale Graça ",
        "description2":"Exale Louvor",
        "title":"Ei mundo,",
        "description3":"Sammy está aqui!"
        
    },

    "french": {
        "description1":"Inspirez la grâce",
        "description2":"Expirez l'éloge",
        "title":"Salut le monde,",
        "description3":"Sammy est là!"
    },

    "dutch": {
        "description1":"Adem Grace in",
        "description2":"Adem Lof uit",
        "title":"Hey wereld,",
        "description3":"Sammy is hier!"
    },

    "spanish": {
        "description1":"Inhala Gracia",
        "description2":"Exhala Alabanza",
        "title":"Hola mundo,",
        "description3":"Sammy está aqui!"
    },

    "germany": {
        "description1":"Atme Grace ein",
        "description2":"Lob ausatmen",
        "title":"Hey Welt,",
        "description3":"Sammy ist da!"
    },

    "arabic": {
        "description1":"استنشق النعمة",
        "description2":"زفير الحمد",
        "title":"أيها العالم،",
        "description3":"سامي هنا!"
    },
}
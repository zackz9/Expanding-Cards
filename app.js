 const allCards = document.querySelectorAll('.container .panel');

 console.log(allCards)

 allCards.forEach(card => {
    card.addEventListener('click', () => {

        removeActiveClasses()

        card.classList.add('active')
    })
 })

 function removeActiveClasses() {
     allCards.forEach( card => {
        card.classList.remove('active')
     })
 }
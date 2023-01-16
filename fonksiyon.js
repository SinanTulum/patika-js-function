// Funcitons 
let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener('click', clickEvent)
decreaseDOM.addEventListener('click', clickEvent)

function clickEvent(){
    console.log(this.id)
    this.id == "increase" ?  counter += 1 : counter -=1
    counterDOM.innerHTML = counter
    if(counter < 0){
        counterDOM.innerHTML = counter = 0
        alert("Kardeşim abartmıyor musun biraz")
    }else if(counter > 100){
        counterDOM.innerHTML = counter += 100
        alert("Kardeşim Büyük İşsizsin Tebrikler")
    }
}
const $submitBtn = document.querySelector('.submit')
const $inputs = document.querySelectorAll('input')

window.addEventListener('load' , () => {
    if(!localStorage.getItem('ninjas')){
        window.open('index.html' , '_self')
    }
})


$submitBtn.addEventListener('click' , e => {
    e.preventDefault()
    
    let isValues = true
    const obj = {}


    $inputs.forEach(item => {
        if(item.value === ''){
            isValues = false
            item.style.borderColor = 'red'
        }else{
             obj[item.id] = item.value

        }
    })

 

    

    if(isValues){
        const  base = JSON.parse(localStorage.getItem('ninjas'))

        base.push(obj)
        console.log(base)
        localStorage.setItem('ninjas' , JSON.stringify(base))
    }else{
        alert('Заполните все поля')

    }
})



window.addEventListener('load' , () => {
    const auth = localStorage.getItem('auth')
  
    if(auth === 'false'){
        window.open('./auth.html' , '_self')
    }
})



const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $signIn = document.querySelector('.signIn')
const $error = document.querySelector('.error')



window.addEventListener('load' , () => {
    if(!localStorage.getItem('auth')){
        localStorage.setItem('auth' , false )
    }else{
        if(localStorage.getItem('auth') === 'true'){
            window.open('./index.html' , '_self')
        }
    }
})
  
  
  
  
  
  $signIn.addEventListener('click' , e => {
    e.preventDefault()
    
    if($email.value === 'naruto' && $password.value === 'naruto'){
        $email.style.borderColor = null
        $password.style.borderColor = null
        $error.innerHTML = 'Вы успешно авторизовались...'
        $email.style.borderColor = 'green'
        $password.style.borderColor = 'green'
        localStorage.setItem('auth' , true)
  
  
        setTimeout(() => {
            window.open('./index.html' , '_self')
  
        } , 1000)

    }else if ($email.value !== 'naruto'){
        $email.style.borderColor = 'red'
        $password.style.borderColor = 'red'
        $email.value = ''
        $password.value = ''
        $error.innerHTML = 'Неверный логин или пароль'
        $error.classList.add('text-danger')
    }
  })
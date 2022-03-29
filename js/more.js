const identification = JSON.parse(localStorage.getItem('more'))
const $title = document.querySelector('.title')
const h1 = document.querySelector('.titleDoc')
const $container = document.querySelector('.row')
const $back = document.querySelector('.arrow')



$container.innerHTML = identification.map(({image , name, power , level , clan , village , element}) => {
    $title.innerHTML = name
    h1.innerHTML = name

    return `
        <div class = "col-12 col-sm-12 col-md-12 col-xl-12">
            <div class="card rounded-2 mt-3">
                <div class="card-image">
                    <img src=${image} class="w-100" style="height:400px; object-fit-cover"/>
                </div>
                <div class="card-body bg-dark text-light">
                    <h3 class="d-flex justify-content-between"><span>Power:</span><span>${power}</span></h3>
                    <h3 class="d-flex justify-content-between"><span>Level:</span><span>${level}</span></h3>
                    <h3 class="d-flex justify-content-between"><span>Clan:</span><span>${clan}</span></h3>
                    <h3 class="d-flex justify-content-between"><span>Village:</span><span>${village}</span></h3>
                    <h3 class="d-flex justify-content-between"><span>Element:</span><span>${element}</span></h3>

                </div>
            </div>
        </div>
    `
})


$back.addEventListener('click' , e => {
    e.preventDefault()

    window.open('./index.html' , '_self')
})

window.addEventListener('load' , () => {
    const auth = localStorage.getItem('auth')
  
    if(auth === 'false'){
        window.open('./auth.html' , '_self')
    }
})
const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif',
        element: 'earth'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif ',
        element:'fire'
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif',
        element: 'lightning'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif',
        element: 'fire'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif',
        element: 'fire'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380',
        element: 'fire'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'Wood Style + Regeneration',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif',
        element: 'water + earth'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif',
        element: 'water'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif',
        element: 'lightning'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Land',
        village:'Hidden Land',
        level:'5th Kazekage',
        clan:'Land',
        image:'https://i.gifer.com/C393.gif',
        element: 'magnetism'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Water Style',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        element: 'water'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f',
        element: 'lightning'
    },    
    
]
  
  
const $container = document.querySelector('.row')
const $search = document.querySelector('.search')
const $select = document.querySelector('.select')
const $navbar = document.querySelector('.navbar')
const $menuBtn = document.querySelector('.menu_btn')
const $signOut = document.querySelector('.signOut')
const $applyBtn = document.querySelector('.applyBtn')
const $colorInput = document.querySelector('.inputColor')
const $imageInput = document.querySelector('.inputImage')
  
  
  
  
  
  
window.addEventListener('load' , () => {
    if(!localStorage.getItem('ninjas')){
      localStorage.setItem('ninjas' , JSON.stringify(database))
    }else{
      const ninja = JSON.parse(localStorage.getItem('ninjas'))
  
  
      const ninjaWithID = ninja.map((item , index) => {
        return {...item , id:index}
      })
  
      localStorage.setItem('ninjas' , JSON.stringify(ninjaWithID))
  
    }
})
  
  
window.addEventListener('load' , cardTemplate(JSON.parse(localStorage.getItem('ninjas'))))
  
  
  window.addEventListener('load' , () => {
    const auth = localStorage.getItem('auth')
  
    if(auth === 'false'){
        window.open('./auth.html' , '_self')
    }
})
  
  
  
$signOut.addEventListener('click' , e => {
    e.preventDefault()
    
  
    localStorage.setItem('auth' , false)
    window.open('./auth.html' , '_self')
  
  
})
  
  
function cardTemplate(base){
    const card = base.map(({id , image , name}) => {
      return `
        <div class="col-12 col-sm-6 col-md-6 col-xl-4">
          <div class="card-header text-center text-light bg-dark">
            <h3>${name}</h3>
          </div>
          <div class="card-image">
              <img src=${image} style="height:300px" class="w-100"/>
          </div>
          <div class="card-footer bg-dark">
            <button onclick="More(${id})" class="btn btn-outline-warning form-control">More</button>
          </div>
        </div>
      `
    }).join('')
    $container.innerHTML = card
}
  
  
$select.addEventListener('change' , e => {
    var selectedValue = e.target.value
  
    if(selectedValue === 'clan'){
      $search.setAttribute('placeholder' , 'Search by clan')
    }else if(selectedValue === 'name'){
      $search.setAttribute('placeholder' , 'Search by name')
    }else if(selectedValue === 'village'){
      $search.setAttribute('placeholder' , 'Search by village')
    }else if(selectedValue === 'power'){
      $search.setAttribute('placeholder' , 'Search by power')
    }else if(selectedValue === 'level'){
      $search.setAttribute('placeholder' , 'Search by level')
    }else if(selectedValue === 'element'){
      $search.setAttribute('placeholder' , 'Search by element')
    }
})
  
  
function More(id){
    const ninja = JSON.parse(localStorage.getItem('ninjas'))
  
    localStorage.setItem('more' , JSON.stringify([ninja[id]]))
    window.location.reload()
    window.open('./more.html' , '_self')
}
  
  
$search.addEventListener('input' , e => {
    var value = e.target.value.toUpperCase()
    var selectedValue = $select.value
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
  
      if(selectedValue === 'clan'){
        const filtered = ninjas.filter(item => item.clan.toUpperCase().includes(value))
        cardTemplate(filtered)
      }else if(selectedValue === 'name'){
        const filtered = ninjas.filter(item => item.name.toUpperCase().includes(value))
        cardTemplate(filtered)
      }else if(selectedValue === 'power'){
        const filtered = ninjas.filter(item => item.power.toUpperCase().includes(value))
        cardTemplate(filtered)
      }else if(selectedValue === 'village'){
        const filtered = ninjas.filter(item => item.village.toUpperCase().includes(value))
        cardTemplate(filtered)
      }else if(selectedValue === 'level'){
        const filtered = ninjas.filter(item => item.level.toUpperCase().includes(value))
        cardTemplate(filtered)
      }else if(selectedValue === 'element'){
        const filtered = ninjas.filter(item => item.element.toUpperCase().includes(value))
        cardTemplate(filtered)
      }
  
  
})
  
  
  
  
  
  
$menuBtn.addEventListener('click' , e => {
      e.preventDefault()
  
      $navbar.classList.toggle('active')
      $menuBtn.classList.toggle('active')
})
  
  
  
  
  
  
$applyBtn.addEventListener('click' , e => {
    e.preventDefault()
  
    if($colorInput.value === ''){
      document.body.style.background = `url('${$imageInput.value}') center / cover no-repeat`
    }else if($imageInput.value === ''){
      document.body.style.background = $colorInput.value
    }else if( $colorInput.value === '' && $imageInput.value === ''){
      alert('Зaполните поля')
    }
})
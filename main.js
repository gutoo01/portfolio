/** end point
 *  https://api.github.com/users/gutoo01
 * 
 * repositórios endpoint
 * https://api.github.com/users/gutoo01/repos
 */

const getData = () => {
  // '//' elimina o uso de 'http' ou 'https'
  fetch(`https//api.github.com/users/gutoo01`).then(response => {
    return response.json()
  }).then(body => {

  userName = body.name
  objective = body.bio
  address = body.location
  // nickname = body.login
  // likedin = body.blog
  twitter = body.twitter_username
  // page = "gustavo-portfolio.netlify.app"
  email = "gu.trindadelive@gmail.com"

    
    e = document.querySelector('#profileName')
    e.innerHTML = userName
    
    e = document.querySelector('#objective')
    e.innerHTML = objective
    
    e = document.querySelector('#address')
    e.innerHTML = address

    e = document.querySelector('#occupation')
    e.innerHTML = objective

    // e = document.querySelector('#nickName')
    // e.innerHTML = nickname

    // e = document.querySelector('#linkedIn')
    // e.innerHTML = likedin

    e = document.querySelector('#twitter')
    e.innerHTML = twitter

    // e = document.querySelector('#page')
    // e.innerHTML = page

    e = document.querySelector('#email')
    e.innerHTML = email
  })
}
getData()

const getRepo = () => {
  fetch(`https//api.github.com/users/gutoo01/repos`).then(response => {
    return response.json()
  }).then(repo => {
    data = repo.slice()
    // console.log(data); 

    // i =  Math.floor(data.length)
    console.log(i);

    userName = data[10].name
    star = data[10].stargazers_count
    forks = data[10].forks
    codeLang = data[10].language

    e = document.querySelector('#nameRep span')
    e.innerHTML = userName

    e = document.querySelector('#git-stars')
    e.innerHTML = star

    e = document.querySelector('#git-forks')
    e.innerHTML = forks

    e = document.querySelector('#language')
    e.innerHTML = codeLang
    
  })
}
getRepo()

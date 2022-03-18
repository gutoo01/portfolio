/** end point
 *  https://api.github.com/users/gutoo01
 * 
 * repositórios endpoint
 * https://api.github.com/users/gutoo01/repos
 */

const getData = () => {
  fetch(`http://api.github.com/users/gutoo01`).then(response => {
    return response.json()
  }).then(body => {
    console.log(body);

    userName = body.name
    objective = body.bio
    address = body.location
    nickname = body.login
    likedin = body.blog
    twitter = body.twitter_username
    page = "gustavo-portfolio.netlify.app"
    email = "gu.trindadelive@gmail.com"

    
    e = document.querySelector('#profileName')
    e.innerHTML = userName
    
    e = document.querySelector('#objective')
    e.innerHTML = objective
    
    e = document.querySelector('#address')
    e.innerHTML = address

    e = document.querySelector('#occupation')
    e.innerHTML = objective

    e = document.querySelector('#nickName')
    e.innerHTML = nickname

    e = document.querySelector('#linkedIn')
    e.innerHTML = likedin

    e = document.querySelector('#twitter')
    e.innerHTML = twitter

    e = document.querySelector('#page')
    e.innerHTML = page

    e = document.querySelector('#email')
    e.innerHTML = email
  })
}
getData()

const getRepo = () => {
  fetch(`https://api.github.com/users/gutoo01/repos`).then(response => {
    return response.json()
  }).then(repo => {
    data = repo.slice(0,12)
    // console.log(data);

    userName = data[11].name
    stars = data[11].stargazers_count
    forkers = data[11].forks
    codeLang = data[11].language

    e = document.querySelector('#nameRep span')
    e.innerHTML = userName

    // e = document.querySelector('.repos #git-stars span')
    // e.innerHTML = stars

    // e = document.querySelector('#git-forks span')
    // e.innerHTML = forkers

    e = document.querySelector('#language')
    e.innerHTML = codeLang
    
  })
}
getRepo()

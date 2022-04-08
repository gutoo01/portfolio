

const url = 'https://api.github.com/users/gutoo01'

function getUser() {
  axios.get(url)
    .then(res => {
      // console.log(res.data)
      profileName.textContent = res.data.name
      objective.textContent = res.data.bio
      address.textContent = res.data.location
      ocupation.textContent = res.data.bio
    })
    .catch(error => console.error(error))
  axios.get(`${url}/repos`)
    .then(res => {
      rep.textContent = res.data[7].name
      git_stars.textContent = res.data[7].stargazers_count
      git_forks.textContent = res.data[7].forks
      // language.textContent = res.data[7].langauge (undefined) ????
    })
    .catch(error => console.error(error))
}

getUser()









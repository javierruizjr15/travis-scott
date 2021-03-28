const axios = window.axios

let currentUser = localStorage.getItem('currentUser')

const getMusicBlogs = () => {
  axios.get('/api/musicBlogs', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: musicBlogs }) => {
      document.getElementById('musicBlogs').innerHTML = ''
      musicBlogs.forEach(musicBlog => {
        const blogElem = document.createElement('div')
        blogElem.className = 'musicBlogDiv'
        blogElem.innerHTML = `
        <p>Title: ${musicBlog.title}</p>
        <p>Content: ${musicBlog.content}</p>
        <p>Username: ${currentUser}</p>
        <button class="btn btn-danger deletemusicBlog" data-id="${musicBlog.id}">Delete</button>
        <hr>
        `
        document.getElementById('musicBlogs').prepend(blogElem)
      })
    })
    .catch(err => console.error(err))
}

document.getElementById('addMusicBlog').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/musicBlogs', {

    title: document.getElementById('addTitle').value,
    content: document.getElementById('addContent').value
  },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    .then(({ data: musicBlog }) => {
      const blogElem = document.createElement('div')
      blogElem.className = 'musicBlogDiv'
      blogElem.innerHTML = `
        <p>Title: ${musicBlog.title}</p>
        <p>Content: ${musicBlog.content}</p>
        <p>Username: ${currentUser}</p>
        <button class="btn btn-danger deletemusicBlog" data-id="${musicBlog.id}">Delete</button>
        <hr>
    `
      document.getElementById('musicBlogs').prepend(blogElem)
      document.getElementById('title').value = ''
      document.getElementById('content').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('deletemusicBlog')) {
    const id = event.target.dataset.id
    axios.delete(`/api/musicBlogs/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})

getMusicBlogs()
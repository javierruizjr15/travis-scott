const axios = window.axios

const getMusicBlogs = () => {
  axios.get('/api/musicBlogs')
    .then(({ data: musicBlogs }) => {
      document.getElementById('musicBlogs').innerHTML = ''
      musicBlogs.forEach(musicBlog => {
        const blogElem = document.createElement('div')
        blogElem.innerHTML = `
        <p>Title: ${musicBlog.title}</p>
        <p>Content: ${musicBlog.content}</p>
        <p>Username: ${musicBlog.username}</p>`
      })
    })
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
    <hr>
    <p>Title: ${musicBlog.title}</p>
    <p>Name: test </p>
    <p>Content: ${musicBlog.content}</p>
    <button class="btn btn-warning" data-bs-target="#updateModal" data-bs-toggle="modal" data-id="${musicBlog.id}">Update</button>
    <button class="btn btn-danger deletemusicBlog" data-id="${musicBlog.id}">Delete</button>
    <hr>
    `
      document.getElementById('musicBlogs').append(blogElem)
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
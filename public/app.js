const axios = window.axios

const getGeneralBlogs = () => {
  axios.get('/api/generalBlogs')
    .then(({ data: generalBlogs}) => {
      document.getElementById('generalBlogs').innerHTML = ''
      generalBlogs.forEach(generalBlog => {
        const blogElem = document.createElement('div')
        blogElem.innerHTML = `
        <p>Title: ${generalBlog.title}</p>
        <p>Content: ${generalBlog.content}</p>
        <p>Username: ${generalBlog.username}</p>`
      })
    })
}

document.getElementById('addGeneralBlog').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/generalBlogs', {
    
    title: document.getElementById('addTitle').value,
    content: document.getElementById('addContent').value},
    {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    
    .then(({ data: generalBlog }) => {
      const blogElem = document.createElement('div')
      blogElem.className = 'generalBlogDiv'
      blogElem.innerHTML = `
    <hr>
    <p>Title: ${generalBlog.title}</p>
    <p>Name: test </p>
    <p>Content: ${generalBlog.content}</p>
    <button class="btn btn-warning" data-bs-target="#updateModal" data-bs-toggle="modal" data-id="${generalBlog.id}">Update</button>
    <button class="btn btn-danger deleteGeneralBlog" data-id="${generalBlog.id}">Delete</button>
    <hr>
    `
    document.getElementById('generalBlogs').append(blogElem)
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('deleteGeneralBlog')) {
    const id = event.target.dataset.id
    axios.delete(`/api/generalBlogs/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})

//getGeneralBlogs()
const axios = window.axios

const getMerchBlogs = () => {
  axios.get('/api/merchBlogs')
    .then(({ data: merchBlogs }) => {
      document.getElementById('merchBlogs').innerHTML = ''
      merchBlogs.forEach(merchBlog => {
        const blogElem = document.createElement('div')
        blogElem.innerHTML = `
        <p>Title: ${merchBlog.title}</p>
        <p>Content: ${merchBlog.content}</p>
        <p>Username: ${merchBlog.username}</p>`
      })
    })
}

document.getElementById('addMerchBlog').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/merchBlogs', {

    title: document.getElementById('addTitle').value,
    content: document.getElementById('addContent').value
  },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    .then(({ data: merchBlog }) => {
      const blogElem = document.createElement('div')
      blogElem.className = 'merchBlogDiv'
      blogElem.innerHTML = `
    <hr>
    <p>Title: ${merchBlog.title}</p>
    <p>Name: test </p>
    <p>Content: ${merchBlog.content}</p>
    <button class="btn btn-warning" data-bs-target="#updateModal" data-bs-toggle="modal" data-id="${merchBlog.id}">Update</button>
    <button class="btn btn-danger deleteMerchBlog" data-id="${merchBlog.id}">Delete</button>
    <hr>
    `
      document.getElementById('merchBlogs').append(blogElem)
      document.getElementById('title').value = ''
      document.getElementById('content').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('deleteMerchBlog')) {
    const id = event.target.dataset.id
    axios.delete(`/api/merchBlogs/${id}`, {
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

//getMerchBlogs()
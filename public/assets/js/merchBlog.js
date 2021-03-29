const axios = window.axios

let currentUser = localStorage.getItem('currentUser')

const getMerchBlogs = () => {
  axios.get('/api/merchBlogs', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: merchBlogs }) => {
      document.getElementById('merchBlogs').innerHTML = ''
      merchBlogs.forEach(merchBlog => {
        const blogElem = document.createElement('div')
        blogElem.className = 'merchBlogDiv'
        blogElem.innerHTML = `
        <p>Title: ${merchBlog.title}</p>
        <p>Content: ${merchBlog.content}</p>
        <p>Username: ${currentUser}</p>
        <button class="btn btn-danger deleteMerchBlog red accent-3" data-id="${merchBlog.id}">Delete</button>
        <hr>
        `
        document.getElementById('merchBlogs').prepend(blogElem)
      })
    })
    .catch(err => console.error(err))
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
    <p>Title: ${merchBlog.title}</p>
    <p>Content: ${merchBlog.content}</p>
    <p>Userame: ${currentUser} </p>
    <button class="btn btn-danger deleteMerchBlog red accent-3" data-id="${merchBlog.id}">Delete</button>
    <hr>
    `
      document.getElementById('merchBlogs').append(blogElem)
      document.getElementById('addTitle').value = ''
      document.getElementById('addContent').value = ''
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

getMerchBlogs()

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
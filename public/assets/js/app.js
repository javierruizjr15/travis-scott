const axios = window.axios

let currentUser = localStorage.getItem('currentUser')

const getGeneralBlogs = () => {
  axios.get('/api/generalBlogs', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: generalBlogs}) => {
      document.getElementById('generalBlogs').innerHTML = ''
      generalBlogs.forEach(generalBlog => {
        const blogElem = document.createElement('div')
        blogElem.className = 'generalBlogDiv'
        blogElem.innerHTML = `
        
        <p>Title: ${generalBlog.title}</p>
        <p>Content: ${generalBlog.content}</p>
        <p>Username: ${currentUser}</p>
        <button class="btn btn-danger deleteGeneralBlog red accent-3" data-id="${generalBlog.id}">Delete</button>
        <hr>
        `
      document.getElementById('generalBlogs').prepend(blogElem)
      })
    })
    .catch(err => console.error(err))
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
<<<<<<< HEAD
    <h2>${generalBlog.title}</h2>
    <p>${generalBlog.content}</p>
    <p>By ${User.name} </p>
    <button class="btn btn-danger deleteGeneralBlog" data-id="${generalBlog.id}">Delete</button>
=======
    <p>Title: ${generalBlog.title}</p>
    <p>Content: ${generalBlog.content}</p>
    <p>Username: ${currentUser} </p>
    <button class="btn btn-danger deleteGeneralBlog red accent-3" data-id="${generalBlog.id}">Delete</button>
>>>>>>> 1d80ac7dcd9429c0027467d7081ec7df01bf94d9
    <hr>
    `
    // prepend is oppoite of append - newest on top
    document.getElementById('generalBlogs').prepend(blogElem)
    document.getElementById('addTitle').value = ''
    document.getElementById('addContent').value = ''
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

getGeneralBlogs()

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

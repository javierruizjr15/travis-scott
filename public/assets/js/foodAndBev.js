const axios = window.axios


let currentUser = localStorage.getItem('currentUser')

const getFoodBevBlogs = () => {
  axios.get('/api/foodBevBlogs', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: foodBevBlogs }) => {
      document.getElementById('foodBevBlogs').innerHTML = ''
      foodBevBlogs.forEach(foodBevBlog => {
        const blogElem = document.createElement('div')
        blogElem.className = 'foodBevDiv'
        blogElem.innerHTML = `
        <p>Title: ${foodBevBlog.title}</p>
        <p>Content: ${foodBevBlog.content}</p>
        <p>Username: ${currentUser}</p>
        <button class="btn btn-danger deleteFoodBevBlog" data-id="${foodBevBlog.id}">Delete</button>
        <hr>
        `
        document.getElementById('foodBevBlogs').prepend(blogElem)
      })
    })
    .catch(err => console.error(err))
}

// const getGeneralBlogs = () => {
//   axios.get('/api/foodBevBlogs')
//     .then(({ data: generalBlogs }) => {
//       document.getElementById('generalBlogs').innerHTML = ''
//       generalBlogs.forEach(generalBlog => {
//         const blogElem = document.createElement('div')
//         blogElem.innerHTML = `
//         <p>Title: ${generalBlog.title}</p>
//         <p>Content: ${generalBlog.content}</p>
//         <p>Username: ${generalBlog.username}</p>`
//       })
//     })
// }

document.getElementById('addFoodBevBlog').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/foodBevBlogs', {

    title: document.getElementById('addTitle').value,
    content: document.getElementById('addContent').value
  },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    .then(({ data: blog }) => {
      const blogElem = document.createElement('div')
      blogElem.className = 'foodBevDiv'
      blogElem.innerHTML = `
    
    <p>Title: ${blog.title}</p>
    <p>Name: test </p>
    <p>Content: ${blog.content}</p>
    <button class="btn btn-danger deleteFoodBevBlog" data-id="${blog.id}">Delete</button>
    <hr>
    `
      document.getElementById('foodBevBlogs').append(blogElem)
      document.getElementById('addTitle').value = ''
      document.getElementById('addContent').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('deleteFoodBevBlog')) {
    const id = event.target.dataset.id
    axios.delete(`/api/foodBevBlogs/${id}`, {
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

getFoodBevBlogs()
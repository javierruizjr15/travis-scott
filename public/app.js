const axios = window.axios

// const getBlogs = () => {
//   axios.get('/api/generalBlogs')
//     .then(({ data: generalBlogs}) => {
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

document.getElementById('addGeneralBlog').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/generalBlogs', {
    title: document.getElementById('addTitle').value,
    content: document.getElementById('addContent').value
  })
    .then(({ data: generalBlog }) => {
      const blogElem = document.createElement('div')
      blogElem.className = 'generalBlogDiv'
      blogElem.innerHTML = `
    <hr>
    <p>Title: ${generalBlog.title}</p>
    <p>Name: Ted </p>
    <p>Content: ${generalBlog.content}</p>
    <button class="btn btn-warning" data-bs-target="#updateModal" data-bs-toggle="modal" data-id="${generalBlog.id}">Update</button>
    <button class="btn btn-danger deletegeneralBlog" data-id="${generalBlog.id}">Delete</button>
    <hr>
    `

    document.getElementById('generalBlogs').append(blogElem)
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
    })
    .catch(err => console.error(err))
})
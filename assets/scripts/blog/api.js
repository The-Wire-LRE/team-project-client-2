const config = require('./../config.js')
const store = require('./../store.js')

// const getBlogs = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/blogs',
//   })
// }
const createBlog = function (data) {
  console.log('in blog/api and token is ', store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/blogs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// since it is singular, should it be 'blog"?
const showBlogs = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/blogs',
  })
}

const updateBlog = function (data) {
  console.log('update blog api running')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/blogs/' + data.blog.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteBlog = function (data) {
  console.log('delete blog api running')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/blogs/' + data.blog.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  // getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  showBlogs
}

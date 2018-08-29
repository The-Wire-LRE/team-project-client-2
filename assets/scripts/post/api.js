const config = require('./../config.js')
const store = require('./../store.js')

// const getPosts = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/posts',
//   })
// }
const createPost = function (data) {
  console.log('in post/api and token is ', store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// since it is singular, should it be 'post"?
const showPosts = function () {
  console.log('in showpostsajax and token is ', store.user.token)

  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePost = function (data) {
  console.log('update post api running')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + data.post.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deletePost = function (data) {
  console.log('delete post api running')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/posts/' + data.post.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  // getPosts,
  createPost,
  updatePost,
  deletePost,
  showPosts
}

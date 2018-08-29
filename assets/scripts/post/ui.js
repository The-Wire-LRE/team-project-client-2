'use strict'
// const config = require('../config.js')
const store = require('../store')
const api = require('./api.js')

// const getPosts = function (event) {
//   event.preventDefault()
//   $('.content').html('')
//   api.showProposals()
//     .then(ui.showPostSuccess)
//     .catch(ui.failure)
// }

const createPostSuccess = function (data) {
  $('#message').text('post successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreatePostSuccess ran. Data is :', data)
}

const showPostsSuccess = function (data) {
  $('#message').text('post successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onShowPostSuccess ran. Data is :', data)
}

const updatePostSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deletePostSuccess = function (data) {
  console.log('in deletePostSuccess')
  $('#message').text('Post successfully deleted')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onDeletePostSuccess ran.')
}

const onPostError = function (error) {
  console.error('in post ui and error is ', error)
}

module.exports = {
  createPostSuccess,
  showPostsSuccess,
  updatePostSuccess,
  deletePostSuccess,
  onPostError
}

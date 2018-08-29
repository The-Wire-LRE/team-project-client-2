'use strict'
// const config = require('../config.js')
const store = require('../store')
const api = require('./api.js')

// const getBlogs = function (event) {
//   event.preventDefault()
//   $('.content').html('')
//   api.showProposals()
//     .then(ui.showBlogSuccess)
//     .catch(ui.failure)
// }

const createBlogSuccess = function (data) {
  $('#message').text('blog successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreateBlogSuccess ran. Data is :', data)
}

const showBlogSuccess = function (data) {
  $('#message').text('blog successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreateBlogSuccess ran. Data is :', data)
}

const updateBlogSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deleteBlogSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const onUpdateBlog = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBlog(data)
    .then(ui.updateBlogSuccess)
    .catch(ui.failure)
}

const onBlogError = function (error) {
    console.error('in blog ui and error is ', error)
}

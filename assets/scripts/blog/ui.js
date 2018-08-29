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

const showBlogsSuccess = function (data) {
  $('#message').text('blog successfully created')
  $('#message').css('background-color', 'green')
  // store.proposal = data.proposal
  console.log('onShowBlogSuccess ran. Data is :', data)

  // data returned is an array of blog objects
  for ( let i=0; i < data.length; i++) {
    $('#blogs ul').append(`<li>
            <h1>${data[i].title}</h1>
            <p>${data[i].logo}</p>
            </li>`)
  }
 }

const updateBlogSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deleteBlogSuccess = function (data) {
  console.log('in deleteBlogSuccess')
  $('#message').text('Blog successfully deleted')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onDeleteBlogSuccess ran.')
}

const onBlogError = function (error) {
    console.error('in blog ui and error is ', error)
}

module.exports = {
  createBlogSuccess,
  showBlogsSuccess,
  updateBlogSuccess,
  deleteBlogSuccess
}

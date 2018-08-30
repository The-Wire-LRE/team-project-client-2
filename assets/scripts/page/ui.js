'use strict'
// const config = require('../config.js')
const store = require('../store')
const api = require('./api.js')

// const getPages = function (event) {
//   event.preventDefault()
//   $('.content').html('')
//   api.showProposals()
//     .then(ui.showPageSuccess)
//     .catch(ui.failure)
// }

const createPageSuccess = function (data) {
  $('#message').text('page successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreatePageSuccess ran. Data is :', data)
}

const showPagesSuccess = function (data) {
  $('#message').text('page successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onShowPageSuccess ran. Data is :', data)
}

const updatePageSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deletePageSuccess = function (data) {
  console.log('in deletePageSuccess')
  $('#message').text('Page successfully deleted')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onDeletePageSuccess ran.')
}

const onPageError = function (error) {
  console.error('in page ui and error is ', error)
}

module.exports = {
  createPageSuccess,
  showPagesSuccess,
  updatePageSuccess,
  deletePageSuccess,
  onPageError
}

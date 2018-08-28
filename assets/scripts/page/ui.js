'use strict'
// const config = require('../config.js')
const store = require('../store')
const api = require('./api.js')

const getPages = function (event) {
  event.preventDefault()
  $('.content').html('')
  api.showProposals()
    .then(ui.showPageSuccess)
    .catch(ui.failure)
}

const createPageSuccess = function (data) {
  $('#message').text('Page successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreatePageSuccess ran. Data is :', data)
}

const showPageSuccess = function (data) {
  $('#message').text('Page successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onCreatePageSuccess ran. Data is :', data)
}

const updatePageSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const deletePageSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.proposal = data.proposal
  console.log('onUpdateSuccess ran. Data is :', data)
}

const onUpdatePage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePage(data)
    .then(ui.updatePageSuccess)
    .catch(ui.failure)
}

// const onGetProposals = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   proposalApi.getProposals()
//     .then(proposalUi.getProposalsSuccess)
//     .catch(proposalUi.failure)
// }

const onClearProposal = (event) => {
  event.preventDefault()
  proposalUi.clearProposal()
}

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
  $('#message').text('blog successfully created')
  $('#message').css('background-color', 'green')
  // store.proposal = data.proposal
  console.log('onShowBlogSuccess ran. Data is :', data)

  // data returned is an array of blog objects
  for ( let i=0; i < data.length; i++) {
    const updateElem = document.createElement("button")
    $(updateElem).click(function(event) {
      // find nearest element and get id
      // run update function
    })
    $('#pages ul').append(`<li>
              <h1>${data[i].title}</h1>
              <p>${data[i].logo}</p>
              ${updateElem}
              </li>`)
  }
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

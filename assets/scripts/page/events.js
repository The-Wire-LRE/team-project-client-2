const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreatePage in page events')
  // do api
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.onPageError)
}

const onDeletePage = (event) => {
  console.log('in onDeletePage')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deletePage(data)
    .then(ui.deletePageSuccess)
    .catch(ui.onPageError)
}

const onUpdatePage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePage(data)
    .then(ui.updatePageSuccess)
    .catch(ui.failure)
}

const onShowPages = function (event) {
  event.preventDefault()
  $('.content').html('')
  api.showPages()
    .then(ui.showPageSuccess)
    .catch(ui.onError)
  console.log('in onShowPages')
}

const addHandler = () => {
  $('#create-page-button').on('click', () =>
    $('#create-page-modal').css('display', 'block')
  )
  $('#delete-page-button').on('click', () =>
    $('#delete-page-modal').css('display', 'block')
  )
  $('#update-page-button').on('click', () =>
    $('#update-page-modal').css('display', 'block')
  )
  $('#create-page').on('submit', onCreatePage)
  $('#update-page').on('submit', onUpdatePage)
  $('#show-page-button').on('click', onShowPages)
  $('#delete-page').on('submit', onDeletePage)
}

module.exports = {
  addHandler
}

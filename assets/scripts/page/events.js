const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreatepage in page events and the pre-api data is ', data)
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
  api.showPages()
    .then(ui.showPagesSuccess)
    .catch(ui.failure)
  console.log('in onShowPages')
}

const addHandler = () => {
  // launches modals on click of action button
  $('#create-page-button').on('click', () =>
    $('#create-page-modal').css('display', 'block')
  )
  $('#delete-page-button').on('click', () =>
    $('#delete-page-modal').css('display', 'block')
  )
  $('#update-page-button').on('click', () =>
    $('#update-page-modal').css('display', 'block')
  )

  // form-field submission buttons on modals
  $('#create-page').on('submit', onCreatePage)
  $('#update-page').on('submit', onUpdatePage)
  $('#show-page-button').on('click', onShowPages)
  $('#delete-page').on('submit', onDeletePage)
}

module.exports = {
  addHandler
}

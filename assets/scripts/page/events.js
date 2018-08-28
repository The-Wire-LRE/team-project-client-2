const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPages = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getPages()
    .then(proposalUi.getPageSuccess)
    .catch(proposalUi.failure)
}

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreatePage in page events')
  // do api
}

const onShowPages = function (event) {
  event.preventDefault()
  $('.content').html('')
  api.showProposals()
    .then(ui.showProposalSuccess)
    .catch(ui.onError)
}

const onUpdatePage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateProposal(data)
    .then(ui.updatePageSuccess)
    .catch(ui.failure)
}

const onDeletePage = (event) => {
  event.preventDefault()
  ui.deletePage()
}

const addHandler = () => {
  // $('#create-page-button').on('click', onCreatePage)

}

module.exports = {
  addHandler
}

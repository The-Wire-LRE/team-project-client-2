const getFormFields = require('../../../lib/get-form-fields.js')

const onGetblogs = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getblogs()
    .then(proposalUi.getblogSuccess)
    .catch(proposalUi.failure)
}

const onCreateblog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreateblog in blog events')
  // do api
}

const onShowblogs = function (event) {
  event.preventDefault()
  $('.content').html('')
  api.showProposals()
    .then(ui.showProposalSuccess)
    .catch(ui.onError)
}

const onUpdateblog = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateProposal(data)
    .then(ui.updateblogSuccess)
    .catch(ui.failure)
}

const onDeleteblog = (event) => {
  event.preventDefault()
  ui.deleteblog()
}

const addHandler = () => {
  // $('#create-blog-button').on('click', onCreateblog)

}

module.exports = {
  addHandler
}

const getFormFields = require('../../../lib/get-form-fields.js')

const onGetBlogs = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getblogs()
    .then(proposalUi.getblogSuccess)
    .catch(proposalUi.failure)
}

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreateblog in blog events')
  // do api
}

const onShowBlogs = function (event) {
  event.preventDefault()
  $('.content').html('')
  api.showProposals()
    .then(ui.showProposalSuccess)
    .catch(ui.onError)
}

const onUpdateBlog = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateProposal(data)
    .then(ui.updateblogSuccess)
    .catch(ui.failure)
}

const onDeleteBlog = (event) => {
  event.preventDefault()
  ui.deleteblog()
}

const addHandler = () => {
  // $('#create-blog-button').on('click', onCreateblog)

}

module.exports = {
  addHandler
}

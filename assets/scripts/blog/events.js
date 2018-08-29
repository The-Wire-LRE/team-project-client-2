const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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
  console.log('In onCreateblog in blog events and the pre-api data is ', data)
  // do api
  api.createBlog(data)
    .then(ui.createBlogSuccess)
    .catch(ui.onBlogError)

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

    $("#create-blog-button").on("click", () =>
      $("#create-blog-modal").css("display", "block")
    );

  $("#create-blog").on("submit", onCreateBlog);

}

module.exports = {
  addHandler
}

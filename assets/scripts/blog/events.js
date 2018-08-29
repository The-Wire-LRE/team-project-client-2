const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreateblog in blog events and the pre-api data is ', data)
  // do api
  api.createBlog(data)
    .then(ui.createBlogSuccess)
    .catch(ui.onBlogError)
}

const onDeleteBlog = (event) => {
  event.preventDefault()
  ui.deleteblog()
}

const onUpdateBlog = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBlog(data)
    .then(ui.updateBlogSuccess)
    .catch(ui.failure)
}
const onShowBlogs = function (event) {
  event.preventDefault()
  api.showBlogs()
    .then(ui.showBlogsSuccess)
    .catch(ui.failure)
  console.log('in onShowBlogs')
}

const addHandler = () => {
  // to launch modals
  $('#create-blog-button').on('click', () =>
    $('#create-blog-modal').css('display', 'block')
  )
  $('#update-blog-button').on('click', () =>
    $('#update-blog-modal').css('display', 'block')
  )
  // button actions
  $('#create-blog').on('submit', onCreateBlog)
  $('#update-blog').on('submit', onUpdateBlog)

  $('#show-blog-button').on('click', onShowBlogs)
}

module.exports = {
  addHandler
}

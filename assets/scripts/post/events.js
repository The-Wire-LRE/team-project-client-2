const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('In onCreatepost in post events and the pre-api data is ', data)
  // do api
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.onPostError)
}

const onDeletePost = (event) => {
  console.log('in onDeletePost')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deletePost(data)
    .then(ui.deletePostSuccess)
    .catch(ui.onPostError)
}

const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.failure)
}
const onShowPosts = function (event) {
  event.preventDefault()
  api.showPosts()
    .then(ui.showPostsSuccess)
    .catch(ui.failure)
  console.log('in onShowPosts')
}

const addHandler = () => {
  // launches modals on click of action button
  $('#create-post-button').on('click', () =>
    $('#create-post-modal').css('display', 'block')
  )
  $('#delete-post-button').on('click', () =>
    $('#delete-post-modal').css('display', 'block')
  )
  $('#update-post-button').on('click', () =>
    $('#update-post-modal').css('display', 'block')
  )

  // form-field submission buttons on modals
  $('#create-post').on('submit', onCreatePost)
  $('#update-post').on('submit', onUpdatePost)
  $('#show-post-button').on('click', onShowPosts)
  $('#delete-post').on('submit', onDeletePost)
}

module.exports = {
  addHandler
}

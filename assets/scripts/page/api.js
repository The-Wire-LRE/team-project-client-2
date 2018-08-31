const config = require('./../config.js')
const store = require('./../store.js')

// const getPages = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/pages'
//   })
// }
const createPage = function (data) {
  console.log('in page/api and token is ', store.user.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/pages',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// since it is singular, should it be 'page"?
const showPages = function () {
  console.log('in showpagesajax and token is ', store.user.token)

  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pages',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const updatePage = function (data) {
  console.log('update page api running')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/pages/' + data.page.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deletePage = function (data) {
  console.log('delete page api running')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/pages/' + data.page.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  // getPages,
  createPage,
  showPages,
  updatePage,
  deletePage
}

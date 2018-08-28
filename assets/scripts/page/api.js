const config = require('./../config.js')
const store = require('./../store.js')

const getPages = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pages',
  })
}
const createPage = function (data) {
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
const showPage = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/pages',
  })
}

const updatePage = function (data) {
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
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/pages/' + data.page.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getPages,
  createPage,
  showPage,
  updatePage,
  deletePage
}

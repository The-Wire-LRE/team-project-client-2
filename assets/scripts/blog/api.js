const config = require('./../config.js')
const store = require('./../store.js')

const getblogs = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/blogs',
  })
}
const createblog = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/blogs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// since it is singular, should it be 'blog"?
const showblog = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/blogs',
  })
}

const updateblog = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/blogs/' + data.blog.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteblog = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/blogs/' + data.blog.id, // TODO figure out what data & get id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getblogs,
  createblog,
  showblog,
  updateblog,
  deleteblog
}

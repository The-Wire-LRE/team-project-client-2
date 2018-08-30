'use strict'

const authEvents = require('./auth/events.js')
const postEvents = require('./post/events.js')
const blogEvents = require('./blog/events.js')
const pageEvents = require('./page/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandler()
  postEvents.addHandler()
  blogEvents.addHandler()
  pageEvents.addHandler()
})

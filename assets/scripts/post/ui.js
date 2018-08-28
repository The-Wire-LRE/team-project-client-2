
const createPostSuccess = function (data) {
    console.log('In ui.createPostSuccess and data from server is ', data)
}

const readPostSuccess = function (data) {
    console.log('In ui.readPostSuccess and the data is ', data)

} 

const updatePostSuccess = function (data) {
    console.log('In ui.updatePostSuccess and the data is ', data)

} 


const postError = function (error) {
    console.error('in post ui and error is ', error)
}

module.exports = {
    createPostSuccess,
    readPostSuccess,
    updatePostSuccess,
    postError
}
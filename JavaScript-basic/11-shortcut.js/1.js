const isActive = true
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')

isActive ? showUser() : hideUser()

// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is false then right side will be executed
isActive || hideUser()
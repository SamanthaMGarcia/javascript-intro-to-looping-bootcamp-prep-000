<<<<<<< HEAD
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push("I am ${i} strange loops.")
      
    }
  }
  return array
}
function whileLoop(n) {
  let countdown = n; 
  while (countdown > 0) {
    console.log(--countdown)
    }
  return 'done'
}
function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
return array
}
=======
var loops = ['I am a strange loop', 'I am ${i} strange loops.']
function forLoop(array) {
  array.push('I am a strange loop.', 'I am ${i} strange loops.')
 } for (let i = 0; i < 25; i++)
  if (i = 1) {
    console.log("I am 1 strange loop.")
     } else {
        console.log("I am ${i} strange loops.")
}






>>>>>>> ad3f401ad0f68146457ec4b60cd7e9f72ed5ead6

let log = function(message){
    console.log(message)
}


let doLog = (message) => console.log(message)



// ----------------------------------

interface Point {
  x: number,
  y: number
}


let drawPoint = (point:Point) =>{
    // ...
}

drawPoint({
    x:1,
    y:2
})




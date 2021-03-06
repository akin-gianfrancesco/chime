

const cvs = document.getElementById('snake')

const ctx = cvs.getContext('2d')


//create the unit
const box = 32

//load images

const ground = new Image()
ground.src = 'img/ground.png'


const foodImg = new Image()
foodImg.src = 'img/food.png'

//create csnake

let snake = []
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

//create the food
let food  = {
    x : Math.floor(Math.random()*17+1) * box, 
    y : Math.floor(Math.random()* 15+3) * box
}

// create the score var

let score = 0

//control snake

let d = ""

document.addEventListener('keydown',direction)

function direction(event){
    if(event.keyCode == 37){
        d = 'LEFT'
    }else if(event.keyCode == 38){
        d = 'UP'
    }else if(event.keyCode == 39){
        d = 'RIGHT'
    }else if(event.keyCode == 40){
        d = 'DOWN'
    }
}


//  draw everything to the canvas

funtion draw() {
    ctx.drawImage(ground,0,0)

    for ( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = (i == 0 )? ' green' : ' white'
        ctx.fillRect(snake[i].x,snake[i].y,box,box)

        ctx.strokeStyle = 'red'
        ctx.fillRect(snake[i].x,snake[i].y,box,box)
    }

    ctx.drawImage(foodImg, food.x, food.y)


    // old head position
    let snakeX = snake[0].x
    let snakeY = snake[0].y


    //remove the tail

    snake.pop()
    
    //which direction
    if(d = 'LEFT') snakeX -= box
    if(d = 'UP') snakeY -= box
    if(d = 'RIGHT') snakeX += box
    if(d = 'DOWN') snakeY += box

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    snake.unshift(newHead)


    ctx.fillStyle = 'white'
    ctx.font = "45px Changa one"
    ctx.fillText(score,2*box,1.6*box)
}

let game = setInterval(draw,100)




const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'lightgray'
const ctx =canvas.getContext('2d')
ctx.strokeStyle= "yellow"
ctx.lineWidth= "5"
ctx.fillStyle = 'green'
ctx.fillRect(10,20,50,70)
ctx.strokeRect(10,20,50,70)

ctx.font='20px Arial'
ctx.textAlign= 'center'
ctx.Baseline="middle"
ctx.fillStyle='blue'
ctx.fillText("Hello world!",50,70)
ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(10,10)
ctx.lineTo(290,10)
ctx.lineTo(10,290)
ctx.lineTo(290,290)
ctx.stroke()

canvas.addEventListener('click',drawRect)
function drawRect(event)
{
    ctx.fillStyle = "red"
    ctx.fillRect(event.offsetX,event.offsetY,5,5)
}

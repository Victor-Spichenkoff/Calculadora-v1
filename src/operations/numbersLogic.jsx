import $ from 'jquery'

window.onclick = (function () {
    
function adicionarAoVisor(num) {
    $('.numbers').append(num.html())
    console.log('nhe')
}

const dot = $('#dot')


//p´recisa esperar carregar
let numeros
let display = $('.display>.numbers')
numeros = document.getElementsByClassName('number')
    Array.from(numeros).forEach(element => {
        element.onclick = () => {
            display.append(
                ($(element).html())
            )     
        }
    });


function verifyDot() {
    //check if the display alredy has a dot
    let nums = $('.display>.numbers').html().split('')
    for(let n of nums) {
        if (n === ',') {
            return true
        }
    }
    return false
}

function putDot() {
    if(!verifyDot()) {
        $('.display>.numbers').append(',')
    }
}

dot.click(putDot)

})
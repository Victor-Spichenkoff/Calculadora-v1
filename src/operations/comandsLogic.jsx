import { click } from '@testing-library/user-event/dist/click'
import $ from 'jquery'

window.onload = (function(){


const clear = $('#clear')
const percent = $('#percent')
const division = $('#division')
const multi = $('#multi')
const less = $('#less')
const sum = $('#sum')
const result = $('#result')
const backOne = $('#backOne')


let contResult = 0
function getResult() {
    if(contResult==0) {
        contResult++
        return parseFloat($('.display>.numbers').html())
        console.log(parseFloat($('.display>.numbers').html()))
    } else {return 0}
}
let resultado = 0


let tipo
function somar() {
    let numbers = parseFloat($('.display>.numbers').html())
    if(contResult===0 ){
        contResult = 1
        resultado = parseFloat($('.display>.numbers').html())
    } else {
        resultado += numbers
    }
    clearDisplay()
    //console.log(resultado)
    tipo = 'soma'
}

function dividir() {
    let numbers = parseFloat($('.display>.numbers').html())
    if(contResult== 0 ){
        contResult = 1
        resultado = parseFloat($('.display>.numbers').html())
    } else {
        resultado /= numbers
    }
    clearDisplay()
    //console.log(resultado)
    tipo='divi'
}

function subtrair() {
    let numbers = parseFloat($('.display>.numbers').html())
    if(contResult== 0 ){
        contResult = 1
        resultado = parseFloat($('.display>.numbers').html())
    } else {
        resultado -= numbers
    }
    clearDisplay()
    //console.log(resultado)
    tipo='menos'
}

function multiplicar() {
    let numbers = parseFloat($('.display>.numbers').html())
    if(contResult== 0 ){
        contResult = 1
        resultado = parseFloat($('.display>.numbers').html())
    } else {
        resultado *= numbers
    }
    clearDisplay()
    //console.log(resultado)
    tipo = 'multi'
}

function fazerOperacao(type='soma') {
    let numbers = parseFloat($('.display>.numbers').html())
    if (type==='soma') {
        resultado += numbers
    }
    if (type==='menos') {
        resultado -= numbers
    }
    if (type==='divi') {
        resultado /= numbers
    }
    if (type==='multi') {
        resultado *= numbers
        //console.log(resultado)
    }
    //console.log(resultado, numbers)
}


function clearDisplay() {
    $('.display>.numbers').html('')
}


function printResult() {
    fazerOperacao(tipo)
    if(resultado===NaN) {
        resultado = 'Erro'
        $('.display>.numbers').html(resultado.toFixed(2).replace('.', ','))
    } else {
        $('.display>.numbers').html(resultado.toFixed(2).replace('.', ','))
    }
}

function clearExpression() {
    resultado = 0
    contResult=0
    clearDisplay()
}

function eraseOne() {
    let nums = $('.display>.numbers').html().split('')
    nums.pop()
    let last = nums.length -1
    let cont = 0

    try{
        console.log(nums, last, cont)
        let final = nums.reduce((f,n) => {
            if(cont < last) {
                console.log(`${f}${n}`)
                return `${f}${n}`/*String(f) + String(n)*/
            }
            cont++
        })
        console.log(final)
        $('.display>.numbers').html(final)
    } catch(e) {
        let final = ''
        $('.display>.numbers').html(final)
    }
}


sum.click(somar)
division.click(dividir)
multi.click(multiplicar)
less.click(subtrair)
clear.click(clearExpression)
result.click(printResult)
backOne.click(eraseOne)


})
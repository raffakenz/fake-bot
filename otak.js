const question = document.getElementById('question')
const answer = document.getElementById('answer')
const loading = document.getElementById('loading')
const container = document.getElementsByClassName('container')

let init = 0

const botSay = (data) => {
    return [
        'Halo! Perkenalkan saya adalah bot buatan Kenz, siapa namamu?',
        `Hai ${data?.Nama}, berapa usia kamu?`,
        `Hmm ${data?.Usia} ya, apa hobi kamu?`,
        `${data?.Hobi}? Kayaknya kita punya hobi yang sama, btw udah punya pacar belum?`,
        `${data?.Pacar} ya, yaudah deh, salam kenal ya!`
    ] 
}

question.innerHTML = botSay()[0]

function botDelay(answerUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(5px)"
    setTimeout(() => { 
        question.innerHTML = botSay(answerUser)[init]
        loading.style.display = "none"
        container[0].style.filter = "none"
    }, 1000)
    answer.value = ''
}

function finishing() {
    window.location.reload()
}

function botEnd() {
    console.log('End...')
}

function botStart() {
    if (answer.value.length < 1) return alert('Silahkan isi terlebih dahulu')
    init++
    if(init === 1) {
        botDelay({Nama: answer.value})
    } else if (init === 2) {
        botDelay({Usia: answer.value})
    } else if (init === 3) {
        botDelay({Hobi: answer.value})
    } else if (init === 4) {
        botDelay({Pacar: answer.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}
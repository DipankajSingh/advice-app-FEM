
const id = document.querySelector('.advice-id');
const text = document.querySelector('.advice-text');
async function getAdvice() {
    let promise = await fetch('https://api.adviceslip.com/advice', {
        headers: {
            'accept': "application/json"
        },
        cache: 'no-cache'
    })
    let res = await promise.json()
    id.textContent = `ADVICE #${res.slip.id}`
    text.textContent = `"${res.slip.advice}"`
}
getAdvice()
document.querySelector('.btn').addEventListener('click', () => {
    id.textContent = 'Guessing ID!!!'
    text.textContent = 'Loading...'
    getAdvice()
})
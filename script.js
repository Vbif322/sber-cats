const btnAdd = document.querySelector('.btnAdd');
const btnClose = document.querySelector('.close');
const popup = document.getElementById('popup');
const field = document.querySelector('.field');
console.log(popup)
let catsName = ['Шпунтик'];
let catsAge = [7];
const api = new Api();

const show = () => {
    api.showCats()
    .then (res => res.json())
    .then(dataset=>{
        console.log(dataset)
        dataset.data.map(e=>{
            createCard(e, field)
        })

    })
}
show();

btnClose.addEventListener('click', () => popup.className = 'popup-wrapper unactive')
btnAdd.addEventListener('click', () => popup.className = 'popup-wrapper');
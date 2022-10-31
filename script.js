const btnAdd = document.querySelector('.btnAdd');
const btnClose = document.querySelector('.close');
const popup = document.getElementById('popup');
const field = document.querySelector('.field');
let ls = localStorage;
let idArr = [];
let catsName = [];
let catsAge = [];
const api = new Api();

const show = () => {
    api.showCats()
    .then (res => res.json())
    .then(dataset=>{
        console.log(dataset)
        dataset.data.map(e=>{
            idArr.push(e.id)
            createCard(e, field)
        })
    })
}
show();

btnClose.addEventListener('click', () => popup.className = 'popup-wrapper unactive')
btnAdd.addEventListener('click', () => popup.className = 'popup-wrapper');
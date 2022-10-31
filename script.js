const btnAdd = document.querySelector('.btnAdd');
const btnClose = document.querySelector('.close');
const btnSubmit = document.querySelector('.form__btn')
const popup = document.getElementById('popup');
const field = document.querySelector('.field');
const formAdd = document.querySelector('#form');
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

const serializeForm = (arr) =>{
    const formData = {};

    arr.forEach(input => {
        if(input.type !== 'submit') {
            formData[input.name] = input.value;
        } else return;
    })
    console.log(formData);
}

const arrForm = [...formAdd.elements]
serializeForm(arrForm)

const submitFrom = () => {

}

btnClose.addEventListener('click', () => popup.className = 'popup-wrapper unactive')
btnAdd.addEventListener('click', () => popup.className = 'popup-wrapper');
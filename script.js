const btnAdd = document.querySelector('.btnAdd');
const field = document.querySelector('.field');
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
    // for (let i in catsName){
    //     field.innerHTML+=`<div class="card">
    //                 <div class="card__info">
    //                 <div class="card__name">${catsName[i]}</div>
    //                 <div class="card__age">${catsAge[i]} лет</div>
    //                 <div class="card__rate"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
    //             </div>
    //             <img src="https://fikiwiki.com/uploads/posts/2022-02/1644927822_23-fikiwiki-com-p-smeshnie-kartinki-pro-kotyat-23.jpg"
    //                 class="card__photo">
    //             <button id="about">Подробнее</button>
    //         </div>`
    // }
}
show();

// btnAdd.addEventListener('click', showPopup);
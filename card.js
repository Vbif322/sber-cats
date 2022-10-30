const createCard = (data, parent, arr) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = data.id;

    const card_info = document.createElement("div");
    card_info.className = "card__info";

    const name = document.createElement("div");
    name.className = "card__name";
    name.innerText = data.name;

    const age = document.createElement("div");
    age.className = "card__age";
    age.innerText = data.age || "Неизвестно";

    const rate = document.createElement("div");
    rate.className = "card__rate";
    rate.innerHTML = "<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";

    const photo = document.createElement("img");
    photo.className = "card__photo";
    photo.src = `${data.img_link || "https://fikiwiki.com/uploads/posts/2022-02/1644927822_23-fikiwiki-com-p-smeshnie-kartinki-pro-kotyat-23.jpg"}`;

    const btn = document.createElement('button');
    btn.id = 'about';
    btn.innerText = 'Подробнее'

    card.append(card_info,photo,btn);
    card_info.append(name,age,rate);
    // card.addEventListener("click", function() {
    //     showPopup(arr, "card");
    // });
    parent.append(card);
}
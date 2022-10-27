class Api {
    constructor () {
        this.url = 'sb-cats.herokuapp.com/api/2/vbif322'
    }

    showCats() {
        return fetch(`${this.url}/show`);
    }

    getAllCatsById (){
        return fetch(`${this.url}/ids`);
    }

    getCatById (id){
        return fetch(`${this.url}/show/${id}`);
    }

    addNewCat (body){
        return fetch(`${this.url}/add`,{
            method: 'POST',
            headers: {
                'Content-Type':"application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    updateCat (id){
        return fetch(`${this.url}/update/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type':"application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(body) 
        });
    }

    delCat (id){
        return fetch(`${this.url}/delete/${id}`,{
            method: 'DELETE'
        });
    }
}



// GET - получить информацию обо всех котах
//     http://sb-cats.herokuapp.com/api/2/<name>/show

// GET - получить массив всех существующих id
//     http://sb-cats.herokuapp.com/api/2/<name>/ids

// GET - получить информацию об одном котике по id
//     http://sb-cats.herokuapp.com/api/2/<name>/show/<id кота>

// POST - добавить нового кота (id, name - обязательно!)
//     http://sb-cats.herokuapp.com/api/2/<name>/add

// PUT - изменить информацию о коте (запрещено менять id и name)
//     http://sb-cats.herokuapp.com/api/2/<name>/update/<id кота>

// DELETE - удалить кота
//     http://sb-cats.herokuapp.com/api/2/<name>/delete/<id кота>
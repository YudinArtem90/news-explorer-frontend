import Api from './Api';
class MainApi extends Api{
    
    constructor({baseUrl}){
        super(baseUrl);
        this._baseUrl = baseUrl; 
    }

    getUser(){
        super._getData({});
        return fetch(`${this._baseUrl}/users/me`, this._data)
                .then(res => { return super._getResult(res) });
    }

    authorization(data){

        super._getData({
            method: 'POST',
            body: data
        });

        return fetch(`${this._baseUrl}/signin`, this._data)
                .then(res => { return super._getResult(res) });
    }

    registration(data){

        super._getData({
            method: 'POST',
            body: data
        });
        
        return fetch(`${this._baseUrl}/signup`, this._data)
                .then(res => { return super._getResult(res) });
    }

    saveNews(data){

        super._getData({
            method: 'POST',
            body: data
        });

        return fetch(`${this._baseUrl}/articles`, this._data)
                .then(res => { return super._getResult(res) });
    }

    getSaveNews(){
        super._getData({});

        return fetch(`${this._baseUrl}/articles`, this._data)
                .then(res => { return super._getResult(res) });
    }


    deleteNews(idCard){
        super._getData({ method: 'DELETE' });

        return fetch(`${this._baseUrl}/articles/${idCard}`, this._data)
                .then(res => { return super._getResult(res) });
    }
}

const mainApi = new MainApi({
    baseUrl: process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001'
});
export default mainApi;
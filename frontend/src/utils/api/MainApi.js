import Api from './Api';
class MainApi extends Api{
    
    constructor({baseUrl}){
        console.log(' MainApi baseUrl', baseUrl);
        super(baseUrl);
        // console.log('super._baseUrl', super._baseUrl);
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
}

const mainApi = new MainApi({
    baseUrl: process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001'
});
export default mainApi;
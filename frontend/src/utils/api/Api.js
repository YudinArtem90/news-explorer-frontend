class Api{
    constructor({baseUrl}){
        this._baseUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3001'; 
        this._data = {};
    }

    _getResult(res){
        return res.json().then(json => {
            return res.ok ? json : Promise.reject(json);
          });
    }
}

export default Api;
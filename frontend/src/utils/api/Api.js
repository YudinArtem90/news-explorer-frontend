import workingWithToken from '../../utils/workingWithToken/WorkingWithToken'
class Api{
    constructor(baseUrl){
        this._baseUrl = baseUrl; 
        this._data = {
            headers: {}
        };
    }

    _resetParameters(){
        if(Object.keys(this._data).length > 1){
            delete this._data.method;
            delete this._data.body;
        }
    }
    
    _getData({method = "GET", body}){
        this._resetParameters();

        this._data.headers['Content-Type'] = 'application/json';
        
        if(workingWithToken.tokenCheck()){
            this._data.headers['authorization'] = workingWithToken.getToken();
        }
        
        this._data.method = method;
        if(body){
            this._data.body = JSON.stringify(body);
        }
    }

    _getResult(res){
        return res.json().then(json => {
            return res.ok ? json : Promise.reject(json);
          });
    }
}

export default Api;
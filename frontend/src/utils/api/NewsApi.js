import Api from './Api';
import workingWithDate from '../../utils/WorkingWithDate/WorkingWithDate';

class NewsApi extends Api{
    constructor({baseUrl, apiKey}){
        super(baseUrl);
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    getNews(news){
        this._data = {
            method: 'GET',
            contentType: 'application/json'
        };

        return fetch(`${this._baseUrl}${news}&language=ru&from=${workingWithDate.getWeekAgo()}&to=${workingWithDate.getToday()}&pageSize=100&apiKey=${this._apiKey}`, this._data)
                .then(res => { return super._getResult(res) });
    }

}

const newsApi = new NewsApi({
    baseUrl:  process.env.REACT_APP_API_URL ? 'https://nomoreparties.co/news/v2/everything?q=' : 'http://newsapi.org/v2/everything?q=',
    apiKey: '0735f04eb4004a0e869f5c8b029adac7'
});
export default newsApi;
import Api from './Api';

class NewsApi extends Api{
    constructor({baseUrl, apiKey}){
        super(baseUrl);
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    getNews(news){
        this._data = {
            method: 'GET',
            // body: data,
            contentType: 'application/json'
        };

        return fetch(`${this._baseUrl}${news}&language=ru&from=2020-12-18&sortBy=publishedAt&apiKey=${this._apiKey}`, this._data)
                .then(res => { return super._getResult(res) });
    }

}

const newsApi = new NewsApi({
    baseUrl: 'http://newsapi.org/v2/top-headlines?q=',
    apiKey: '0735f04eb4004a0e869f5c8b029adac7'
});
export default newsApi;
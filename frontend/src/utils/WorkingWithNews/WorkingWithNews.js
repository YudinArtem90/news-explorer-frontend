class WorkingWithNews{
    getNews(){
        return JSON.parse(localStorage.getItem('news'));
    }

    checkNews(){
        let result = false;

        if (this.getNews()){
            result = true;;
        }

        return result;
    }

    saveNews(news){
        let result = false;
        
        if (news){
            localStorage.setItem('news', JSON.stringify(news));
            result = true;
        }

        return result;
    }

    deleteNews(){
        localStorage.removeItem('news');
    }

    addCardsBookmarks(cardsBookmarks){
        localStorage.setItem('cardsBookmarks', JSON.stringify(cardsBookmarks));
    }
    
    deleteCardsBookmarks(){
        localStorage.removeItem('cardsBookmarks');
    }

    getCardsBookmarks(){
        if(localStorage.getItem('cardsBookmarks')){
            return JSON.parse(localStorage.getItem('cardsBookmarks'));
        }

        return [];
    }
}

const workingWithNews = new WorkingWithNews();
export default workingWithNews;
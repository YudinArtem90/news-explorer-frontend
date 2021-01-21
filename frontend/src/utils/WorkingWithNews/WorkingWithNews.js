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
}

const workingWithNews = new WorkingWithNews();
export default workingWithNews;
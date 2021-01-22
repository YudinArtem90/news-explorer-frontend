class WorkingWithDate{

    constructor(){
        this._today = new Date();
    }

    _getDate(date){
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    getToday(){
        return this._getDate(this._today);
    }

    getWeekAgo(){
        const weekAgo = this._today - 1000 * 60 * 60 * 24 * 7; 
        const dateNews = new Date(weekAgo);
        return this._getDate(dateNews);
    }

    getDateForNews(date){
        const dateNews = new Date(date);

        const month = dateNews.toLocaleString('ru', {       
            month: 'long'       
          })

        return `${dateNews.getDay()} ${month}, ${dateNews.getFullYear()}`;
    ;
    }
}

const workingWithDate = new WorkingWithDate();
export default workingWithDate;
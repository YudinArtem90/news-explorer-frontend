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
}

const workingWithDate = new WorkingWithDate();
export default workingWithDate;
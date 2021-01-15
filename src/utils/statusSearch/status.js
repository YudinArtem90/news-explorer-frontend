class Status{
    constructor(){
        this._searchDisabled = 0;
        this._searchIsActive = 1;
        this._searchNothingFound = 2;
    }

    searchDisabled(){
        return this._searchDisabled;
    }

    searchIsActive(){
        return this._searchIsActive;
    }

    searchNothingFound(){
        return this._searchNothingFound;
    }
}

const status = new Status();
export default Object.freeze(status);
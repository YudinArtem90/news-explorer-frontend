class Status{
    constructor(){
        this._searchDisabled = 0;
        this._searchIsActive = 1;
        this._searchNothingFound = 2;
        this._searchError = 3;
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

    searchError(){
        return this._searchError;
    }
}

const status = new Status();
export default Object.freeze(status);
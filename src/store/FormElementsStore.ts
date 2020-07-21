import {action, observable} from "mobx";

class FormElementsStore {

    @observable
    inputValue: string = "";

    @action
    setInputValue = (value) => {
        this.inputValue = value;
    }

}

export default new FormElementsStore();
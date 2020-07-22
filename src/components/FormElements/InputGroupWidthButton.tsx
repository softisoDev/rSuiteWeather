import React, {FC, InputHTMLAttributes} from "react";
import {InputGroup, Input, Icon, InputGroupProps} from "rsuite";
import {InputProps} from "rsuite/lib/Input/Input";
import FormElementsStore from "../../store/FormElementsStore";
import {observer} from "mobx-react";

export interface ICustomInputGroupWidthButton {
    inputGroupProps?: InputGroupProps;
    inputProps?: InputProps & InputHTMLAttributes<any>;
    onClickIcon?: () => void,
}

const InputGroupWidthButton: FC<ICustomInputGroupWidthButton> =  observer(({inputGroupProps, inputProps, ...props}) => {
    return (
        <InputGroup {...inputGroupProps} inside>
            <Input {...inputProps} value={FormElementsStore.inputValue} onChange={FormElementsStore.setInputValue}/>
            <InputGroup.Button>
                <Icon icon="search" onClick={props.onClickIcon}/>
            </InputGroup.Button>
        </InputGroup>
    )
});

export default InputGroupWidthButton;
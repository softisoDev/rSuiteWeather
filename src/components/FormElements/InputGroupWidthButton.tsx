import React, {FC, InputHTMLAttributes} from "react";
import {InputGroup, Input, Icon, InputGroupProps} from "rsuite";
import {InputProps} from "rsuite/lib/Input/Input";

export interface ICustomInputGroupWidthButton {
    inputGroupProps?: InputGroupProps;
    inputProps?: InputProps & InputHTMLAttributes<any>;
    onClickIcon?: (e) => void,
}


const InputGroupWithButton: FC<ICustomInputGroupWidthButton> = ({inputGroupProps, inputProps, ...props}) => (
    <InputGroup {...inputGroupProps} inside>
        <Input {...inputProps} />
        <InputGroup.Button>
            <Icon icon="search" onClick={props.onClickIcon}/>
        </InputGroup.Button>
    </InputGroup>
);

export default InputGroupWithButton;
import ModalDeleteTodo from "../modal/ModalDeleteTodo";
import { Icon } from '@iconify/react';
import { useState } from "react";

const ListItem = (props) => {
    const [isCheck, setIsCHeck] = useState(false);
    const handleClick = () => {
        props.setEditId(props.data.id);
        props.dataById(props.data.id);
        props.getDetail(props.id);
    }

    const getColor = () => {
        let color = "#FFF";

        switch(props.data.priority){
            case "very-high":
                color = "#ED4C5C";
                break;
            case "high":
                color = "#F8A541";
                break;
            case "normal":
                color="#00A790";
                break;
            case "low":
                color = "#428BC1";
                break;
            case "very-low":
                color = "#8942C1";
                break;
            default: 
                color = "#FFF";
                break;
        }

        return color;
    }

    const handleCheck = (event) => {
        if(event.target.checked){
            setIsCHeck(true);
        } else {
            setIsCHeck(false);
        }

        props.changeStatus(props.data.id,event.target.checked);
    }

    return (
        <div className="list-item mb-3" data-cy="todo-item">
            <div className="d-flex align-items-center">
                <input data-cy="todo-item-checkbox" className="me-3 form-check-input" type="checkbox" onClick={handleCheck}/>
                <span data-cy="todo-item-priority-indicator" style={{backgroundColor:getColor()}} className="dot me-3"></span>
                <h5 
                    data-cy="todo-item-title" 
                    className={`list-item-title mb-0 me-4 ${(isCheck? "line-through":"")}`}
                    
                >{props.data.title}
                </h5>
                <button onClick={handleClick} className="btn-icon" data-bs-toggle="modal" data-bs-target={"#edit"}>
                    <Icon icon="cil:pencil" color="#c4c4c4" />
                </button>
            </div>
            <ModalDeleteTodo
                id={props.data.id}
                title={props.data.title}
                delete={props.delete} 
            />
        </div>
    )
}

export default ListItem;
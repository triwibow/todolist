import ModalDelete from "../modal/ModalDelete";
import { Icon } from '@iconify/react';

const ListItem = (props) => {
    const handleClick = () => {
        props.setEditId(props.data.id);
        props.dataById(props.data.id);
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

    return (
        <div className="list-item mb-3">
            <div className="d-flex align-items-center">
                <input className="me-3 form-check-input" type="checkbox" />
                <span style={{backgroundColor:getColor()}} className="dot me-3"></span>
                <h5 className="list-item-title mb-0 me-4">{props.data.title}</h5>
                <button onClick={handleClick} className="btn-icon" data-bs-toggle="modal" data-bs-target={"#edit"}>
                    <Icon icon="cil:pencil" color="#c4c4c4" />
                </button>
            </div>
            <ModalDelete data={props} />
        </div>
    )
}

export default ListItem;
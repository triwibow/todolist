import { Icon } from '@iconify/react';

const ButtonEdit = (props) => {
    return (
        <button className="btn-icon" data-bs-toggle="modal" data-bs-target={"#edit-"+props.id}>
            <Icon icon="cil:pencil" color="#c4c4c4" />
        </button>
    )
}

export default ButtonEdit;
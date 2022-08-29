import { Icon } from '@iconify/react';

const ModalDelete = (props) => {
    const handleClick = (id) => {
        console.log(id);
        props.data.delete(id);
    }

    return (
        <>
        <button className="btn-icon" data-bs-toggle="modal" data-bs-target={"#modal-delete-" + props.data.data.id} data-cy={props.cy}>
            <Icon icon="material-symbols:delete-outline" color="#c4c4c4" width="30" height="30" />
        </button>
        <div data-cy="todo-modal-delete" className="modal fade modal-delete" id={"modal-delete-" + props.data.data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-body text-center">
                        <div className="mb-3" data-cy="modal-delete-icon">
                            <Icon icon="akar-icons:triangle-alert" color="#ed4c5c" width="140" height="100" />
                        </div>
                        <span className="d-block">{props.desc}</span>
                        <strong>“{props.data.data.title}”?</strong>
                        <div className="d-flex justify-content-center mt-5">
                            <button data-cy="modal-delete-cancel-button" type="button" className="btn-cancel px-5 py-2 me-3" data-bs-dismiss="modal">Batal</button>
                            <button data-cy="modal-delete-confirm-button" data-bs-dismiss="modal" onClick={() => handleClick(props.data.data.id)} type="button" className="btn-confirm px-5 py-2">Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalDelete;
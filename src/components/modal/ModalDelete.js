import { Icon } from '@iconify/react';

const ModalDelete = () => {
    return (
        <>
        <button className="btn-icon" data-bs-toggle="modal" data-bs-target="#modalDelete">
            <Icon icon="material-symbols:delete-outline" color="#c4c4c4" width="30" height="30" />
        </button>
        <div className="modal fade modal-delete" id="modalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-body text-center">
                        <div className="mb-3">
                            <Icon icon="akar-icons:triangle-alert" color="#ed4c5c" width="140" height="100" />
                        </div>
                        <span className="d-block">Apakah anda yakin menghapus activity</span>
                        <strong>“Meeting dengan Client”?</strong>
                        <div className="d-flex justify-content-center mt-5">
                            <button type="button" className="btn-cancel px-5 py-2 me-3" data-bs-dismiss="modal">Batal</button>
                            <button type="button" className="btn-confirm px-5 py-2">Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalDelete;
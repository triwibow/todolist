import { Icon } from '@iconify/react';

const Form = () => {
    return (
        <>
        <button type="button" className="btn-add fw-bold d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <Icon icon="ant-design:plus-outlined" color="white" width="21" height="21" />
            <span className="ms-2">Tambah</span>
        </button>
        <div className="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Tambah List Item</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label-custom mb-2">NAMA LIST ITEM</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label-custom mb-2">PRIORITY</label>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form;
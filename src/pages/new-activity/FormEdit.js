const FormEdit = (props) => {
    const handleSubmit = (event)=> {
        event.preventDefault();
        props.submit(props.id);
    }

    const handleChange = (event) => {
        props.change(event);
    }

    return (
        <>
        <div className="modal modal-lg fade" id="edit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit List Item</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">        
                            <div className="form-group mb-3">
                                <label className="form-label-custom mb-2">NAMA LIST ITEM</label>
                                <input 
                                    name="title" 
                                    type="text" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                    value={props.data.title}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label-custom mb-2">PRIORITY</label>
                                <select value={props.data.priority} className="form-control" name="priority" onChange={handleChange}>
                                    <option value="very-high">Very High</option>
                                    <option value="high">High</option>
                                    <option value="normal">Normal</option>
                                    <option value="low">Low</option>
                                    <option value="very-low">Very Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default FormEdit;
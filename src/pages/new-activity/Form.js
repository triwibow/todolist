import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Select, {components} from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button  from 'react-bootstrap/Button';


const { Option } = components;

const IconOption = (props) => {
    return (
        <Option {...props}>
            <span className="dot me-3" style={{backgroundColor:props.data.color}}></span>
            {props.data.label}
        </Option>
    );
}

const Form = (props) => {
    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState("disabled");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedOption, setSelectedOption] = useState({
        name: "priority",
        value:"very-high",
        label: "Very High"
    });
    const handleSubmit = (event)=> {
        event.preventDefault();
        props.submit();
    }

    const handleChange = (event) => {
        if(event.target.name === "title"){
            if(event.target.value === ""){
                setDisable("disabled");
            } else {
                setDisable("");
            }
        }
        props.change(event);
    }

    const handleSelectChange = (event) => {
        setSelectedOption({
            ...selectedOption,
            value: event.value,
            label: event.label
        });        
    }

    const options = [
        { value: 'very-high', label: 'Very High', color:'#ED4C5C' },
        { value: 'high', label: 'High', color:'#F8A541' },
        { value: 'normal', label: 'Normal', color:'#00A790' },
        { value: 'low', label:'Low', color:'#428BC1'},
        { value: 'very-low', label:'Very Low', color:'#8942C1'}
    ]

    useEffect(() => {
        props.change({target:selectedOption})
    }, [selectedOption.value]);

    return (
        <>
        <Button data-cy="todo-add-button" className="btn-add" onClick={handleShow}>
            <Icon icon="ant-design:plus-outlined" color="white" width="21" height="21" />
            <span className="ms-2">Tambah</span>
        </Button>
        <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-delete"
            data-cy="modal-add"
        >
            <Modal.Header>
                <h5 data-cy="modal-add-title" className="modal-title" id="exampleModalLabel">Tambah List Item</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div className="form-group mb-3">
                        <label data-cy="modal-add-name-title" className="form-label-custom mb-2">NAMA LIST ITEM</label>
                        <input 
                            data-cy="modal-add-name-input"
                            name="title" 
                            type="text" 
                            className="form-control" 
                            onChange={handleChange}
                            value={props.data.title} 
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label data-cy="modal-add-priority-title" className='form-label-custom mb-2'>Priority</label>
                        <div style={{width: "30%"}}> 
                            <Select 
                                defaultValue={selectedOption}
                                options={options}
                                onChange={handleSelectChange}
                                name="priority"
                                components={{ Option: IconOption }} 
                                data-cy="modal-add-priority-dropdown"
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button 
                        onClick={handleClose} 
                        data-cy="modal-add-save-button" 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={disable}
                    >
                        Save changes
                    </button>
                </Modal.Footer>
            </form>
            
        </Modal>
        </>
    )
}

export default Form;
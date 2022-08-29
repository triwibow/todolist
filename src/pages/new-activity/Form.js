import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Select, {components} from 'react-select'

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
        <button type="button" className="btn-add fw-bold d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <Icon icon="ant-design:plus-outlined" color="white" width="21" height="21" />
            <span className="ms-2">Tambah</span>
        </button>
        <div className="modal modal-lg fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Tambah List Item</h5>
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
                            <div className='form-group mb-3'>
                                <label className='form-label-custom mb-2'>Priority</label>
                                <div style={{width: "30%"}}> 
                                    <Select 
                                        defaultValue={selectedOption}
                                        options={options}
                                        onChange={handleSelectChange}
                                        name="priority"
                                        components={{ Option: IconOption }} 
                                    />
                                </div>
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

export default Form;
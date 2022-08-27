import { Icon } from '@iconify/react';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <button className="btn-icon-circle" style={{marginRight:props.mr}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Icon icon="akar-icons:arrow-up-down" color="#888" width="20" height="20" />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <a className="dropdown-item">Something else here</a>
            </div>
        </div>
    )
}

export default Dropdown;
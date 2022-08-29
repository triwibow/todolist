import { Icon } from '@iconify/react';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <button data-cy="todo-sort-button" className="btn-icon-circle" style={{marginRight:props.mr}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Icon icon="akar-icons:arrow-up-down" color="#888" width="20" height="20" />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button data-cy="sort-selection" className="dropdown-item">Terbaru</button>
                <button data-cy="sort-selection" className="dropdown-item">Terlama</button>
                <button data-cy="sort-selection" className="dropdown-item">A-Z</button>
                <button data-cy="sort-selection" className="dropdown-item">Z-A</button>
                <button data-cy="sort-selection" className="dropdown-item">Belum Selesai</button>
            </div>
        </div>
    )
}

export default Dropdown;
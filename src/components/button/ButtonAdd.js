import { Icon } from '@iconify/react';
import { useState } from 'react';

const ButtonAdd = (props) => {
    const [loading, setLoading] = useState(false);
    const _handleClick = () => {
        props.click();
    }

    return (
        <button onClick={_handleClick} className="btn-add fw-bold d-flex align-items-center" data-cy="activity-add-button">
            {loading? (
                <div className="spinner-border text-light spinner-border-sm mx-auto" role="status">
                    <span className="sr-only"></span>
                </div>
            ): (
                <>
                    <Icon icon="ant-design:plus-outlined" color="white" width="21" height="21" />
                    <span className="ms-2">Tambah</span>
                </>
            )}
        </button>
    )
}

export default ButtonAdd;
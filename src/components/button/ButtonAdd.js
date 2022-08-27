import { Icon } from '@iconify/react';

const ButtonAdd = () => {
    return (
        <button className="btn-add fw-bold d-flex align-items-center">
            <Icon icon="ant-design:plus-outlined" color="white" width="21" height="21" />
            <span className="ms-2">Tambah</span>
        </button>
    )
}

export default ButtonAdd;
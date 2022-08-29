import {Link} from 'react-router-dom';
import ModalDelete from '../modal/ModalDelete';
import Moment from 'react-moment';
import 'moment/locale/id';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const CardList = (props) => {
    const [show, setShow] = useState(false);

    const handleClick = (id) => {
        props.delete(id);
    }

    return (
        <div className={props.column} data-cy="activity-item">
            <div className="card-list">
                <Link className="link" to={props.to}>
                    <div className="card-list-body">
                        <h5 className="text-title" data-cy="activity-item-title">{props.data.title}</h5>
                    </div>
                </Link>
                <div className="card-list-footer">
                    <span className="text-date" data-cy="activity-item-date">
                        <Moment format="DD MMMM YYYY" locale="id">
                            {props.data.created_at}
                        </Moment>
                    </span>
                    <button className="btn-icon" data-cy="activity-item-delete-button" onClick={()=>setShow((show)?false:true)}>
                        <Icon icon="material-symbols:delete-outline" color="#c4c4c4" width="30" height="30" />
                    </button>
                    {show && (
                    <div data-cy="modal-delete" className="modal fade modal-delete show" style={{display:"block"}}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content p-3">
                                <div className="modal-body text-center">
                                    <div className="mb-3" data-cy="modal-delete-icon">
                                        <Icon icon="akar-icons:triangle-alert" color="#ed4c5c" width="140" height="100" />
                                    </div>
                                    <span className="d-block">Apakah anda yakin menghapus activity </span>
                                    <strong>“{props.data.title}”?</strong>
                                    <div className="d-flex justify-content-center mt-5">
                                        <button onClick={() => setShow(false)} data-cy="modal-delete-cancel-button" type="button" className="btn-cancel px-5 py-2 me-3" data-bs-dismiss="modal">Batal</button>
                                        <button data-cy="modal-delete-confirm-button" data-bs-dismiss="modal" onClick={() => handleClick(props.data.id)} type="button" className="btn-confirm px-5 py-2">Hapus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CardList;
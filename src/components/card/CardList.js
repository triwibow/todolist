import {Link} from 'react-router-dom';
import ModalDelete from '../modal/ModalDelete';
import Moment from 'react-moment';
import 'moment/locale/id';

const CardList = (props) => {
    return (
        <div className={props.column} data-cy="activity-item">
            <div className="card-list">
                <Link className="link" to={props.to}>
                    <div className="card-list-body">
                        <h5 data-cy="activity-item-title" className="text-title">{props.data.title}</h5>
                    </div>
                </Link>
                <div className="card-list-footer">
                    <span className="text-date" data-cy="activity-item-date">
                        <Moment format="DD MMMM YYYY" locale="id">
                            {props.data.created_at}
                        </Moment>
                    </span>
                    <ModalDelete cy="todo-modal-delete" desc="Apakah anda yakin menghapus activity " data={props} />
                </div>
            </div>
        </div>
    )
}

export default CardList;
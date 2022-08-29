import {Link} from 'react-router-dom';
import ModalDelete from '../modal/ModalDelete';
import Moment from 'react-moment';
import 'moment/locale/id';

const CardList = (props) => {
    return (
        <div className={props.column} data-cy="item-activity">
            <div className="card-list">
                <Link className="link" to={props.to}>
                    <div className="card-list-body">
                        <h5 className="text-title" data-cy="title-item-activity">{props.data.title}</h5>
                    </div>
                </Link>
                <div className="card-list-footer">
                    <span className="text-date" data-cy="date-item-activity">
                        <Moment format="DD MMMM YYYY" locale="id">
                            {props.data.created_at}
                        </Moment>
                    </span>
                    <ModalDelete cy="activity-item-delete-button" data={props} />
                </div>
            </div>
        </div>
    )
}

export default CardList;
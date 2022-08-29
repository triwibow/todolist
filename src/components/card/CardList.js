import { useNavigate } from 'react-router-dom';
import ModalDeleteActivity from '../modal/ModalDeleteActivity';
import Moment from 'react-moment';
import 'moment/locale/id';

const CardList = (props) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/detail/${props.data.id}`);
    }
    return (
        <div className={props.column} data-cy="activity-item">
            <div className="card-list">
                <div className="card-list-body" onClick={redirect}>
                    <h5 className="text-title" data-cy="activity-item-title">{props.data.title}</h5>
                </div>
                <div className="card-list-footer">
                    <span className="text-date" data-cy="activity-item-date">
                        <Moment format="DD MMMM YYYY" locale="id">
                            {props.data.created_at}
                        </Moment>
                    </span>
                    <ModalDeleteActivity 
                        id={props.data.id}
                        title={props.data.title}
                        delete={props.delete} 
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default CardList;
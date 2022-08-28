import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { API } from "../../config/api";
import {Link} from "react-router-dom";
import emptyPng from "../../assets/icon/todo-empty-state.png";
import BackNavigation from "../../components/navigation/BackNavigation";
import ButtonEmpty from "../../components/button/ButtonEmpty";
import ListItem from "../../components/list/ListItem";
import Dropdown from "../../components/dropdown/Dropdown";
import Form from "./Form";
import PageLoader from "../../components/loader/PageLoader";


import AlertActivity from "../../components/alert/AlertActivity";
import FormEdit from "./FormEdit";

const NewActivity = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(-1);

    const [formData, setFormData] = useState({
        activity_group_id: id,
        title: "",
        priority: "very-high"

    });
    const [status, setStatus] = useState({
        status: false,
        loading: false,
        message: "Sedang mengolah data"
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        });
    }

    const loadData = async () => {
        try {
            setLoading(true);
            const response = await API.get("/todo-items", {
                params:{
                    activity_group_id: id
                }
            });

            if(response.status !== 200){
                setError(true);
                setLoading(false);
                return;
            }   

            if(response.data.data.length < 1){
                setError(true);
                setLoading(false);
                return;
            }

            setData(response.data.data);
            setLoading(false);
            setError(false);
        } catch(e)
        {
            setError(true);
        }
    }

    const getDataById = (id) => {
        const result = [...data].filter(item => {
            return item.id === id
        });

        if(result.length > 0){
            setFormData({
                ...formData,
                title:result[0].title,
                priority:result[0].priority
            });
        }

    }

    const addData = async () => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const response = await API.post('/todo-items', formData);
            if(response.status !== 201){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }

            const result = await response.data;

            setData(arr => {
                return [
                    ...arr,
                    result
                ]
            });

            setFormData({
                ...formData,
                title: "",
                priority:"very-high"
            })

            setStatus({
                status: true,
                loading:false,
                message: "Berhasil menambahkan activity"
            });

        } catch(e)
        {
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi Kesalahan"
            });
        }
    }

    const editData = async (id) => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const response = await API.patch(`/todo-items/${id}`, formData);
            if(response.status !== 201){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }

            const result = await response.data;

            setData(arr => {
                return [
                    ...arr,
                    result
                ]
            });

            setFormData({
                ...formData,
                title: "",
                priority:"very-high"
            })

            setStatus({
                status: true,
                loading:false,
                message: "Berhasil menambahkan activity"
            });
        } catch(e)
        {
        
        }
    }

    const deleteData = async (id) => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const response = await API.delete(`/todo-items/${id}`);
            
            if(response.status !== 200){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }
            
            setData((arr) => {
                return arr.filter(item => {
                    return item.id !== id
                })
            });

            setStatus({
                status: true,
                loading:false,
                message: "Berhasil menghapus activity"
            });

        } catch(e)
        {
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi kesalahan"
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return(
        <div className="container py-4">
            <FormEdit 
                submit={(id) => editData(id)}
                change={(event) => handleChange(event)}
                id={editId} 
                data={formData} 
            />
            <AlertActivity status={status} setStatus={setStatus}/>
            <div className="row">
                <div className="col-md-12 d-flex align-items-center justify-content-between mb-5">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="link">
                            <BackNavigation />
                        </Link>
                        <h3 className="fw-bold mb-0">Activity</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        <Dropdown
                            mr="15px"
                        />
                        <Form 
                            submit={() => addData()} 
                            change={(event) => handleChange(event)}
                            data={formData}
                        />
                    </div>
                    
                </div>
                <div className="col-md-12">
                    {error? (
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <ButtonEmpty
                                    icon={emptyPng}
                                />
                            </div>
                        </div>
                    ):(loading? (
                        <PageLoader />
                    ):(
                        <div className="row">
                            <div className="col-md-12">
                                {data.map(item => {
                                    return <ListItem
                                                key={item.id}
                                                data={item}
                                                setEditId={setEditId}
                                                dataById={(id)=>getDataById(id)}
                                                delete={(id) => deleteData(id)}
                                            />
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewActivity;
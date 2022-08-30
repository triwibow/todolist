import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { API } from "../../config/api";
import {Link} from "react-router-dom";
import { Icon } from '@iconify/react';
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
    const [title, setTitle] = useState("Activity");
    const [openTitle, setOpenTitle] = useState(false);

    const [formData, setFormData] = useState({
        activity_group_id: id,
        title: "",
        priority: ""

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

    const loadDetail = async () => {
        try {
            const response = await API.get("/activity-groups", {
                params:{
                    id: id
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

            setTitle(response.data.data[0].title);
            setError(false);
            setLoading(false);


        } catch(e)
        {
            setError(true);
            setLoading(false);
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi kesalahan saat mengambil data"
            });
        }
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

    const getDetail = async (id) => {
        try {
            const response = await API.get(`/todo-items/${id}`);
           
        } catch(e)
        {   

        }
    }

    const addData = async () => {
        try {
            setLoading(true);
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
                setLoading(false);
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

            setError(false);
            setLoading(false);

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
                setError(true);
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

            

            if((data.length - 1) === 0){
                setError(true);
            } else {
                setError(false);
            }

        } catch(e)
        {
            setStatus({
                status: true,
                loading:false,
                message: "Terjadi kesalahan"
            });

            setError(true);
        }
    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const updateTitle = async () => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });
            const params = {
                title: title
            }

            const response = await API.patch(`/activity-groups/${id}`, params);

            if(response.status !== 200){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }

        } catch(e)
        {
            setStatus({
                status:true,
                loading:false,
                message: "Terjadi Kesalahan"
            })
        }
    }

    const changeStatus = async (id, status) => {
        try {
            setStatus({
                status:false,
                loading: true,
                message: ""
            });

            const params = {
                is_active: (status)?0:1
            }

            const response = await API.patch(`/todo-items/${id}`, params);
            if(response.status !== 201){
                setStatus({
                    status:true,
                    loading:false,
                    message: "Terjadi Kesalahan"
                })
                return;
            }            

            setStatus({
                status: true,
                loading:false,
                message: "Berhasil merubah status"
            });
        } catch(e)
        {
            setStatus({
                status:true,
                loading:false,
                message: "Terjadi Kesalahan"
            })
        }
    }

    const sortItem = (val) => {

        if(val === "baru"){
            const tmp = [...data].sort((a, b) => {
                return a.id - b.id;
            });

            setData(tmp);
        }

        if(val === "az"){
            const tmp = [...data].sort((a, b) => {
                if (b.title.toLowerCase() > a.title.toLowerCase()) {
                    return -1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            setData(tmp);
        }

        if(val === "za"){
            const tmp = [...data].sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1;
                }
                if (b.title.toLowerCase() > a.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            setData(tmp);
        }

        if(val === "belum-selesai"){
            const tmp = [...data].sort((a, b) => {
                if (b.title.toLowerCase() > a.title.toLowerCase()) {
                    return -1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            setData(tmp);

        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadDetail();
    }, [])

    useEffect(() => {
        window.onclick = (e) => {
            if(!e.target.classList.contains('todo-title')){
                if(openTitle){
                    setOpenTitle(false);
                    updateTitle();
                }
            } 
        }
    }, [openTitle]);


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
                        <div>
                            {!openTitle ? (
                                <h3 onClick={() => setOpenTitle((openTitle)? false:true)}  data-cy="todo-title" style={{fontSize:"28px"}} className="fw-bold mb-0 todo-title">{title}</h3>
                            ): (
                                <input 
                                    className="form-title todo-title" 
                                    type="text" 
                                    value={title} 
                                    onChange={changeTitle}
                                />
                            )}
                            
                        </div>
                        <button  type="button" className="btn-icon ms-4 todo-title" onClick={() => setOpenTitle((openTitle)? false:true)}>
                            <Icon icon="cil:pencil" color="#c4c4c4" className="todo-title" />
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <Dropdown
                            mr="15px"
                            sortItem={(val) => sortItem(val)}
                        />
                        <Form 
                            submit={() => addData()} 
                            change={(event) => handleChange(event)}
                            data={formData}
                        />
                    </div>
                    
                </div>
                <div className="col-md-12" data-cy="todo-empty-state">
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
                                                getDetail={(id)=>getDetail(id)}
                                                delete={(id) => deleteData(id)}
                                                changeStatus={(id, status) => changeStatus(id, status)}
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
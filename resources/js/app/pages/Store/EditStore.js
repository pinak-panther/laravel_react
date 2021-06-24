
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    error:{
        paddingLeft:10,
        color:"red"
    }
}));
function EditStore(props) {
    const classes = useStyles();
    const history = useHistory()
    const [id,setId]=useState(0);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }
    useEffect(()=>{
        let id = props.match.params.id;
        API.get(`store/${id}`,prepareAuthHeader())
            .then(response=>{
                let data  = response.data.data;
                setId(data.id);
                setName(data.name);
                setEmail(data.email);
            })
    },[]);

    const validationSchema = Yup.object({
        name:Yup.string()
            .required('Name Field is Required'),
        email:Yup.string()
            .required('Email Field is Required')
            .email('Please provide Valid Email')
    });

    const handleFormikSubmit = (values) => {
        API.put(`store/${id}`,values,prepareAuthHeader())
            .then(response=>{
                history.goBack();
            })
            .catch(err=>{
                console.error(err);
            })
    }

    const formik = useFormik({
        initialValues:{
            name,email
        },
        enableReinitialize:true,
        validationSchema,
        onSubmit:values => handleFormikSubmit(values)
    })
    return (
        <form className={classes.container} style={{display:"inline"}} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                label="Name"
                className={classes.textField}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
            />
            {formik.errors.name && formik.touched.name ? <div className={classes.error}>{formik.errors.name.toUpperCase()}</div>:null}
            <TextField
                id="email"
                name="email"
                label="Email"
                className={classes.textField}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
            />
            {formik.errors.email && formik.touched.email ? <div className={classes.error}>{formik.errors.email.toUpperCase()}</div>:null}

            <div style={{textAlign:"center"}}>
                <Button variant="contained" type={"submit"} color={'secondary'} size={'large'} >
                    Edit Store
                </Button>
            </div>
        </form>
    );
}
const mapStateToProps = (state,ownProps) =>{
    const {auth:{authToken}} = state;
    return {authToken};
}
export default connect(mapStateToProps)(EditStore)

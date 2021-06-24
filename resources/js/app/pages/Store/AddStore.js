
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, MenuItem} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {useFormik} from "formik";
import * as Yup from 'yup';

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
function AddStore(props) {
    const classes = useStyles();
    const history = useHistory();

    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }

    const validationSchema = Yup.object(
        {
            name:Yup.string()
                .required('Name Field is Required'),
            email:Yup.string()
                .required('Email Field is Required')
                .email('Please provide valid Email')
        }
    )

    const formikSubmitHandler = (values) => {
        API.post('store',values,prepareAuthHeader())
            .then(response=>{
                history.push('/store-list');
            })
            .catch(err=>{
                console.error(err);
            })
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
        },
        validationSchema,
        onSubmit:values => formikSubmitHandler(values)
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
            {formik.touched.name && formik.errors.name ? <div className={classes.error}>{formik.errors.name.toUpperCase()}</div>:null}
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
            {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email.toUpperCase()}</div>:null}
            <div style={{textAlign:"center"}}>
                <Button variant="contained" type={"submit"} color={'secondary'} size={'large'} >
                    Add Store
                </Button>
            </div>
        </form>
    );
}

const mapStateToProps = (state, ownProps) =>{
    const {auth:{authToken}}=state;
    return {authToken};
}
export default connect(mapStateToProps)(AddStore)

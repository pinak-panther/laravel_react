
import React, {useState} from 'react';
import clsx from 'clsx';
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

const initialValues = {
    name:'',
    description:'',
}

const validationSchema = ()=>Yup.object({
    name:Yup.object()
        .required('Name Field is Required !!'),
    description:Yup.object()
        .required('Description Field is Required !!'),
})
function AddApplication(props) {
    const classes = useStyles();
    const history = useHistory();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:values => formikHandleSubmit(values)
    });

    const formikHandleSubmit = (values)=>{
        API.post('application',values,prepareAuthHeader())
            .then(response=>{
                history.push('/application-list');
            })
            .catch(err=>{
                console.error(err);
            })
    }
    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }

    return (
        <form className={classes.container} style={{display:"inline"}} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={formik.values.name}
                onChange={formik.handleChange}
                margin="normal"
                variant="filled"
                name="name"
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className={classes.error}>{formik.errors.name.toUpperCase()}</div> : null}
            <TextField
                id="description"
                label="description"
                className={classes.textField}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
                name="description"
            />
            {formik.errors.description && formik.touched.description? <div className={classes.error}>{formik.errors.description.toUpperCase()}</div> : null}

            <div style={{textAlign:"center"}}>
                <Button variant="contained" type={"submit"} color={'secondary'} size={'large'} >
                    Add Application
                </Button>
            </div>
        </form>
    );
}
const mapStateToProps = (state,ownProps)=>{
    const {auth:{authToken}}=state;
    return {authToken};
}
export default connect(mapStateToProps)(AddApplication);

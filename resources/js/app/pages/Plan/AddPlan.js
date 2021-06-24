
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, MenuItem} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import * as Yup from 'yup';
import {useFormik} from "formik";

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
function AddPlan(props) {
    const classes = useStyles();
    const history = useHistory();

    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }

    function handleFormikSubmit(values) {
        API.post('plan',values,prepareAuthHeader())
            .then(response=>{
                history.push('/plan-list');
            })
            .catch(err=>{
                console.error(err);
            })
    }
    const validationSchema = ()=>Yup.object({
            name:Yup.string()
                .required('Name is Required Field'),
            price:Yup.string()
                .required('Price is Required Field'),
            duration:Yup.string()
                .required('Duration is Required Field')
    });
    const formik = useFormik({
        initialValues:{
            name:'',
            price:'',
            duration:''
        },
        onSubmit:values => handleFormikSubmit(values),
        validationSchema,
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
            {formik.errors.name && formik.touched.name ? <div className={classes.error}>{formik.errors.name.toUpperCase()}</div> : null}
            <TextField
                id="price"
                name="price"
                label="Price"
                className={classes.textField}
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
            />
            {formik.errors.price && formik.touched.price ? <div className={classes.error}>{formik.errors.price.toUpperCase()}</div> : null}
            <TextField
                id="duration"
                name="duration"
                label="Duration"
                className={classes.textField}
                value={formik.values.duration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
            />
            {formik.errors.duration && formik.touched.duration ? <div className={classes.error}>{formik.errors.duration.toUpperCase()}</div> : null}
            <div style={{textAlign:"center"}}>
                <Button variant="contained" type={"submit"} color={'secondary'} size={'large'} >
                    Add Plan
                </Button>
            </div>
        </form>
    );
}

const mapStateToProps = (state, ownProps) =>{
    const {auth:{authToken}}=state;
    return {authToken};
}
export default connect(mapStateToProps)(AddPlan)

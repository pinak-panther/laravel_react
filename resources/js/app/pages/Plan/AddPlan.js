
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, MenuItem} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import * as Yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from "formik";

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
    const validationSchema = Yup.object({
            name:Yup.string()
                .required('NAME IS REQUIRED FIELD'),
            price:Yup.string()
                .required('PRICE IS REQUIRED FIELD'),
            duration:Yup.string()
                .required('DURATION IS REQUIRED FIELD')
    });

    const initialValues={
            name:'',
            price:'',
            duration:''
        }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => handleFormikSubmit(values)}>
            <Form autoComplete="off" noValidate className={classes.container} style={{display:"inline"}}>
                <Field name="name" as={TextField} margin="normal" variant="filled" className={classes.textField} id="name" label="Name"/>
                <ErrorMessage name="name" className={classes.error} component="div"/>
                <Field name="price" as={TextField} margin="normal" variant="filled" className={classes.textField} id="price" label="Price"/>
                <ErrorMessage name="price" className={classes.error} component="div"/>
                <Field name="duration" as={TextField} margin="normal" variant="filled" className={classes.textField} id="duration" label="Duration"/>
                <ErrorMessage name="duration" className={classes.error} component="div"/>
                <div style={{textAlign:"center"}}>
                   <Button variant="contained" type={"submit"} color={'secondary'} size={'large'} >
                     Add Plan
                   </Button>
                </div>
            </Form>
        </Formik>
    );
}

const mapStateToProps = (state, ownProps) =>{
    const {auth:{authToken}}=state;
    return {authToken};
}
export default connect(mapStateToProps)(AddPlan)


import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from "react-router-dom";
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

function EditApplication(props) {
    const classes = useStyles();
    const history = useHistory()
    const [id,setId]=useState(0);
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');


    const formikHandleSubmit = (values) => {
        API.put(`application/${id}`,values,prepareAuthHeader())
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
    useEffect(()=>{
        let id = props.match.params.id;
        API.get(`application/${id}`,prepareAuthHeader())
            .then(response=>{
                let data  = response.data.data;
                setId(data.id);
                setName(data.name);
                setDescription(data.description);
            })
    },[]);

    const validationSchema = ()=>Yup.object({
            name:Yup.string()
                .required('Name Field is Required Field !!'),
            description:Yup.string()
                .required('Description is Required Field !!')
        });


    const formik = useFormik({
        initialValues:{
            name,
            description,
        },
        enableReinitialize:true,
        validationSchema,
        onSubmit:values=>formikHandleSubmit(values),
    });
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
                id="description"
                name="description"
                label="Description"
                className={classes.textField}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="normal"
                variant="filled"
            />
            {formik.errors.description && formik.touched.description ? <div className={classes.error}>{formik.errors.description.toUpperCase()}</div> : null}
            <div style={{textAlign:"center"}}>
                <Button variant="contained" type={"submit"} color={'secondary'} size={'large'}>
                    Edit Application
                </Button>
            </div>
        </form>
    );
}
const mapStateToProps = (state,ownProps)=>{
    const {auth:{authToken}}=state;
    return {authToken};
}
export default connect(mapStateToProps)(EditApplication);

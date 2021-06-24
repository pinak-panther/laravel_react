
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";

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
}));
function EditStore(props) {
    const classes = useStyles();
    const history = useHistory()
    const [id,setId]=useState(0);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
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
        API.get(`store/${id}`,prepareAuthHeader())
            .then(response=>{
                let data  = response.data.data;
                setId(data.id);
                setName(data.name);
                setEmail(data.email);
            })
    },[]);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        let data = {
            name,email
        }
        API.put(`store/${id}`,data,prepareAuthHeader())
            .then(response=>{
                history.goBack();
            })
            .catch(err=>{
                console.error(err);
            })

    }

    return (
        <form className={classes.container} style={{display:"inline"}} noValidate autoComplete="off" onSubmit={(event)=>{handleFormSubmit(event)}}>
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={(event)=>{handleNameChange(event)}}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={(event)=>handleEmailChange(event)}
                margin="normal"
                variant="filled"
            />
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

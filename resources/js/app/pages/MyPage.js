import React, {useEffect, useState} from "react";
// import {useSubheader} from "../../_metronic/layout";
import {Button} from "@material-ui/core";
import {API, WEB} from "../../_metronic/_helpers/AxiosHelper";
import {useHistory} from "react-router-dom";
import {actions} from "../modules/Auth";
import {useDispatch} from "react-redux";
import {customLogin, customGetUserByToken, CUSTOM_LOGIN_URL} from "../modules/Auth/_redux/authCrud";

export const MyPage = () => {
  // const subheader = useSubheader();
  //   subheader.setTitle("My Custom title");
    const [token,setToken]=useState('');
    const [user,setUser] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        clickLoginHandler('admin@demo.com','password');
    },[])
    const testButtonHandler = (event) => {
      API.get('/test',{
          headers: {
              'Authorization': `Bearer ${token}`
          }
      }).then((response)=>{

      })
  }
    const clickLoginHandler = (email,password) => {
        let data = {email,password};
        WEB.get('/sanctum/csrf-cookie').then(resp=>{
            API.post('/login',data).then(response=>{
                setToken(response.data.token);
            }).catch(err =>{
                console.error(err);
                history.push('/auth/login');
            })
        })
    }
    const clickLogoutHandler = () => {
        API.post('/logout',{},{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>{
            setToken('');
        }).catch(err =>{
            console.error(err);
        })
    }
    const getUser = () => {
        API.get('/user',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>{
        }).catch(err =>{
            console.error(err);
        })
    }
    //custom redux events
    const buttonLoginHandler = () => {
        customLogin('admin@demo.com', 'password').then(response=>{
            setToken(response.data.token);
            dispatch(actions.customLogin(response.data.token));
        });
    }

    const buttonLogoutHandler = () => {
        dispatch(actions.logout());
    }
    const buttonUserHandler = () => {
        dispatch(actions.requestUser(user));
    }

    const button4Handler = () => {

    }


    return (<>
      My Page
      <Button color={"secondary"} onClick={()=>{clickLoginHandler('admin@demo.com','password')}}>Login</Button>
      <Button color={"secondary"} onClick={(event)=>{testButtonHandler(event)}}>Test Button</Button>
      <Button color={"secondary"} onClick={()=>clickLogoutHandler()}>Logout</Button>
      <Button color={"secondary"} onClick={()=>getUser()}>User</Button>

      Redux actions
      <Button color={"secondary"} onClick={()=>{buttonLoginHandler()}}>Login</Button>
      <Button color={"secondary"} onClick={(event)=>{buttonLogoutHandler()}}>Logout</Button>
      <Button color={"secondary"} onClick={()=>{buttonUserHandler()}}>User Request</Button>
      <Button color={"secondary"} onClick={()=>{button4Handler()}}>Button4</Button>
  </>);
}

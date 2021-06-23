
import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {connect} from "react-redux";


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    loadMore: {
     textAlign:"center"
    }
}));

function createData(id,email, name) {
    return { id, email, name};
}

function FilteredStore(props) {
    const classes = useStyles();
    const history = useHistory();
    const [store,setStore] = useState([]);
    const [changeFlag,setChangFlag] = useState(true);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [open, setOpen] = useState(false);
    const [selectedId,setSelectedId]=useState('');
    const params = useParams();
    const {planId,appId} = params;


    const loadStores = (url) => {
        API.get(url,prepareAuthHeader())
            .then(response => {
                setLoading(response.data.data.next_page_url == null ? false : true);
                setPage(prev => prev + 1);
                let data = response.data.data;
                let stores = data.data;
                if (stores.length > 0) {
                    let tempArr = [];
                    stores.map(store => {
                        tempArr.push(createData(store.id, store.email, store.name));
                    });
                    setStore(prevState => prevState.concat(tempArr));
                }
            }).catch(err => console.error(err))
    }

    useEffect(()=>{
        const url = planId && appId ? `/store?page=${page}&planId=${planId}&appId=${appId}`: `store?page=${page}`;
        loadStores(url);
    },[changeFlag]);

    const userClickHandler = (id)=>{
       history.push(`/store-edit/${id}`);
    }
    const userDeleteHandler = () =>{
         API.delete(`store/${selectedId}`,prepareAuthHeader()).then(response=>{
             let filteredStore = store.filter(singleStore => singleStore.id != selectedId);
             setStore(filteredStore);
             setSelectedId('');
             setOpen(false);
         })
    }
    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }

    const loadMoreClickHandler = () => {
        setChangFlag(!changeFlag);
    }

    function handleClickOpen(id) {
        setSelectedId(id);
        setOpen(true);
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Domain</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.map(row => (
                        <StyledTableRow key={row.id} >
                            <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button size="small" variant="contained" onClick={(event)=>userClickHandler(row.id)} color={"secondary"} className={classes.margin}> Update </Button>
                                <Button size="small" variant="contained" onClick={(event)=>handleClickOpen(row.id)} color={"secondary"}> Delete </Button>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.loadMore}>
            <Button variant="contained" disabled={!loading} onClick={()=>{loadMoreClickHandler()}} color={"secondary"} size={"large"} className={classes.button}>Load More</Button>
            </div>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Store Delete Alert"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this Store ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)} color="secondary" variant="contained" size={'small'}>
                        Disagree
                    </Button>
                    <Button variant="contained" onClick={()=>userDeleteHandler()} color="secondary" autoFocus size={'small'}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}
const mapStateToProps = (state, ownProps) => {
    const {auth:{authToken}} = state ;
    return {authToken};
}
export default connect(mapStateToProps)(FilteredStore)

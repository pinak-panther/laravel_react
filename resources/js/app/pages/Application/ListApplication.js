
import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {API} from "../../../_metronic/_helpers/AxiosHelper";
import {useHistory} from "react-router-dom";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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

function createData(id,name, description, price, category) {
    return { id, name, description, price, category };
}


function ListApplication(props) {
    const classes = useStyles();
    const history = useHistory();
    const [application,setApplication] = useState([]);
    const [changeFlag,setChangFlag] = useState(true);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [open, setOpen] = useState(false);
    const [selectedId,setSelectedId]=useState('');
    const [plan,setPlan]=useState([]);
    const [selectedPlan,setSelectedPlan]=useState(2);
    const [planDialog,setPlanDialog]=useState(false);

    const loadApplications = () => {
        API.get(`application?page=${page}`,prepareAuthHeader())
            .then(response => {
                setLoading(response.data.data.next_page_url == null ? false : true);
                setPage(prev => prev + 1);
                let data = response.data.data;
                let applications = data.data;
                if (applications.length > 0) {
                    let tempArr = [];
                    applications.map(application => {
                        tempArr.push(createData(application.id, application.name, application.description));
                    });
                    setApplication(prevState => prevState.concat(tempArr));
                    API.get(`plan?perPage=100`,prepareAuthHeader()).then(planResponse=>{
                        let planData = planResponse.data.data;
                        let plans = planData.data;
                        let plansArray = [];
                        plans.map(singlePlan =>{
                            plansArray.push(createPlanData(singlePlan.id,singlePlan.name,singlePlan.price,singlePlan.duration));
                        })
                        setPlan(plansArray);
                    }).catch(err => console.error(err));
                }
            }).catch(err => console.error(err))
    }

    useEffect(()=>{
        loadApplications();
    },[changeFlag]);

    const userClickHandler = (id)=>{
       history.push(`application-edit/${id}`);
    }
    const prepareAuthHeader = ()=>{
        return {
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }
    }
    const userDeleteHandler = () =>{
         API.delete(`application/${selectedId}`,prepareAuthHeader()).then(response=>{
             let filteredApplication = application.filter(singleApplication => singleApplication.id != selectedId);
             setApplication(filteredApplication);
             setSelectedId('');
             setOpen(false);
         })
    }

    const loadMoreClickHandler = () => {
        setChangFlag(!changeFlag);
    }

    function handleClickOpen(id) {
        setSelectedId(id);
        setOpen(true);
    }

    const planClickHandler = (id) => {
        setSelectedId(id);
        setPlanDialog(true);
    }

    const applyPlanFilter = () => {
        setPlanDialog(false);
        // history.push(`/store-list/${selectedPlan}/${selectedId}`);
        history.push(`/filtered-list/${selectedPlan}/${selectedId}`);
    }

    const prepareRadioButtonContent = (plansArray)=>{
        if(plansArray){
            let content = plansArray.map(plan=>{
                return (
                    <FormControlLabel
                        key={plan.id}
                        value={plan.id}
                        control={<Radio color="secondary" />}
                        label={plan.name}
                        labelPlacement="bottom"
                    />
                )
            });
            return content;
        }
        return null;
    }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Select Plan</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {application.map(row => (
                        <StyledTableRow key={row.id} >
                            <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                            <StyledTableCell align="center">{row.description}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button size="small" variant="contained" onClick={(event)=>planClickHandler(row.id)} color={"secondary"} className={classes.margin}> Select Plan </Button>
                            </StyledTableCell>
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
                <DialogTitle id="alert-dialog-title">{"Application Delete Alert"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this Application ?
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

            <Dialog
                open={planDialog}
                onClose={()=>setPlanDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Select Below Plan"}</DialogTitle>
                <DialogContent>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="planRadio" name="planRadio" value={parseInt(selectedPlan)} onChange={()=>setSelectedPlan(event.target.value)} row>
                            {prepareRadioButtonContent(plan)}
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setPlanDialog(false)} color="secondary" variant="contained" size={'small'}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={()=>applyPlanFilter()} color="secondary" autoFocus size={'small'}>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}
const mapStateToProps = (state,ownProps)=>{
 const {auth:{authToken}}=state;
 return {authToken};
}
export default connect(mapStateToProps)(ListApplication);

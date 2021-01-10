import React, {useState} from 'react'
import axios from "axios";
import { Fab, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

function Forms() {

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const StyledFab = withStyles({
        root:{
            background:'linear-gradient(45deg, #e5e4cc 20%, #f65c78 70%)',
            marginTop: '5px',
        }
    })(Fab);

    const [client, setClient] = useState({
        name:"",
        email:""
    });

    const handleChange = e => {
          const {name, value} = e.target;
          setClient(prevValue => {
            if(name === "name"){
                return ({
                    name:value,
                    email:prevValue.email
                });
            } else if(name === "email"){
                return ({
                    name:prevValue.name,
                    email:value
                });
            }
        })
    };

    const handleClick = async (e) => {
        // e.preventDefault();
        console.log(client);
       axios.post('https://react-newsletter.herokuapp.com/',client)
       .then(console.log("New Client"))
       .catch(err=>console.log("There is an error " +err));

       setOpen(true);

       axios.get('https://react-newsletter.herokuapp.com/')
       .then((response) => {
        console.log(response.status);
        (response.status===200)
        ? setAlert(true)
        : setAlert(false)
       })
       .catch((error) => {
         console.log("There is an error " +error);
       })
    }

    return (
    <div>
        <div className="peeker">
            <div className="eye one"></div>
            <div className="eye two"></div>
        </div>
        <div className="App">
            <h1>Subscribe to our Newsletter</h1>
            <form method="POST" className="container">
                <input className="entry top" type="text" name="name" placeholder="Your Name" onChange={handleChange} autoFocus></input>
                <input className="entry bottom" type="email" name="email" placeholder="Your Email" onChange={handleChange}></input>
                <StyledFab variant="extended" onClick={handleClick}>
                Submit
                </StyledFab>
                <Snackbar open={open}>
                    {(alert) ? <Alert severity = "success">You are now subscribed to my Awesome Newsletter! </Alert> : <Alert severity = "error"> Ooops, something went wrong! </Alert> }
                </Snackbar>
            </form>
      </div>
    </div>      
    )
}

export default Forms

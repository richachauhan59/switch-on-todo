import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/31D3a%2BxqDiL._SY450_.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGrid:{
    marginTop:"17%",
    padding:"18%",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


// https://reqres.in/api/login

export default function Login() {
const classes = useStyles();

const [data, setData] = useState('')
const [auth, setAuth] = useState(false)
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')

// useEffect(() => {
  
//   }, [true]);

// "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
 

const Submit = (e) => {
    e.preventDefault()
    const payload = {
        email:email,
        password:pass
    }
    axios.post('https://reqres.in/api/login', 
    payload, 
    {
    'Accept':'application/json', 
    'Content-type':'application/json'
    })
    // .then(res => res.json())
    .then((result) => {
        console.log(result.data.token, "res")
        setData(result.data.token)
        setAuth(true)
    })
    .catch((err) => {
        console.log("error occured", err)
        setAuth(false)
    })
}

//   componentDidMount() {
//     // POST request using axios with set headers
//     const article = { title: 'React POST Request Example' };
//     const headers = { 
//         'Authorization': 'Bearer my-token',
//         'My-Custom-Header': 'foobar'
//     };
//     axios.post('https://reqres.in/api/articles', article, { headers })
//         .then(response => this.setState({ articleId: response.data.id }));
// }

    {
        if(!auth){
            return (
                <Grid container component="main" className={classes.root}>
                  <CssBaseline />
                  <Grid item xs={false} sm={12} md={6} className={classes.image} />
                  <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                     
                     
                      <Grid className={classes.formGrid}>
                          <Grid>
                            <Typography component="h1" variant="h5">
                                ToDo App
                            </Typography>
                          </Grid>
                        <form className={classes.form} noValidate onSubmit={Submit}>
                            <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            /> */}
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            > Login
                            </Button>
                        </form>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              );
        }

        else{
            return(
                <h1>Richa chauhan</h1>
            )
        }
    }

   
  
}
import React, { Component } from 'react';
import AppBar from './components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import SimpleTable from './components/Table';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyALPFRgKXPysYioU1LGjaCeN5G_HSeoCB0",
    authDomain: "massage-85af5.firebaseapp.com",
    databaseURL: "https://massage-85af5.firebaseio.com",
    projectId: "massage-85af5",
    storageBucket: "massage-85af5.appspot.com",
    messagingSenderId: "406797506369"
  };
  firebase.initializeApp(config);
}
render() {
  return (
        
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar />
            <Paper>
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                  <MessageList db={firebase} />
                </div>
              </div>
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                  <MessageBox db={firebase} />
                </div>
              </div>
            </Paper>
            <SimpleTable />
            </Grid>
          </Grid>
        
  );
 }
}

export default App;
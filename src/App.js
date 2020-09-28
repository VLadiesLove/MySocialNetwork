import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';





function App(props) {
  
  return (
    
    <div className="wrapper">
        <Header />
        <Navbar />
        {/* <Route path='/profile' component={Profile} />
         
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} /> */}
        <Route path='/dialogs' render={ () => {return <DialogsContainer store={props.store} />}} />
        <Route path='/profile/:userId?' render={ () => {return <ProfileContainer store={props.store} />}} />
        <Route path='/users' render={ () => {return <UsersContainer store={props.store} />}} />
    </div>
    
  );
}






export default App;

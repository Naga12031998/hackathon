import React from 'react';
// import './App.css';

//components
import Landing_page from './components/Landing_page'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact_us from './components/Contact_us'
import Couple_board from './components/Couple_board'
import Live_message from './components/Live_message'
import Video_chat from './components/Video_chat'
//react-router-dom
import {Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Landing_page} />
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services} />
        <Route path='/blog' component={Blog} />
        <Route path="/contactus" component={Contact_us} />
        <Route path="/coupleboard" component={Couple_board} />
        <Route path="/livemessage" component={Live_message} />
        <Route path="/videochat" component={Video_chat} />
      </BrowserRouter>
    </div>
  );
}

export default App;

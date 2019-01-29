import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import store from './Store/index'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>,
   document.getElementById('root'));


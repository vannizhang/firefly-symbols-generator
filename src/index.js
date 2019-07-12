import './style/index.scss';
import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { getFireflySymbolsData } from './js/prepareData';

const initApp = ()=>{

    const firsflySymbols = getFireflySymbolsData();
    // console.log(firsflySymbols);

    ReactDOM.render(
        <App
            firsflySymbols={firsflySymbols}
        />, 
        document.getElementById('rootDiv')
    );
};

initApp();
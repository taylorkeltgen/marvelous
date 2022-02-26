import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
require('dotenv').config();

const md5 = require('md5');
const privateKey = '7c102ae9dfa5e000b24a379d896608a72aab9b71'
const publicKey = '22a7456573deb77de2473e3e16a78271';
const ts = new Date().getTime();
const stringToHash = ts + privateKey + publicKey;
const token = md5(stringToHash);
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters?name=thor';
const testUrl = BASE_URL + '&ts=' + ts + '&apikey=' + publicKey + '&hash=' + token;


axios.get(`${testUrl}`)
.then((response) => {
    console.log(response);
})

const Search = () => {

    return (
        <div>

        </div>
    )
}

export default Search;
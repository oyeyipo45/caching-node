const express = require('express')
const router = express.Router()
const needle = require('needle')
const url = require('url')
const axios = require('axios').default;
const apicache = require('apicache');


const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

let cache = apicache.middleware

router.get('/',cache('2 minutes'), async (req, res) => {
    try {


    //     console.log(API_KEY_VALUE);

        // console.log(url.parse(req.url, true).query.q);
        // const params = new URLSearchParams({
        //     [API_KEY_NAME] : API_KEY_VALUE
        // })
       
    //    const apiRes = await needle('get', `${API_BASE_URL}?${params}`);
    //     const data = apiRes.body;
    //     res.status(200).json(data);
         const options = {
           method: 'GET',
           url: 'https://community-open-weather-map.p.rapidapi.com/weather',
           params: { ...url.parse(req.url, true).query },
           headers: {
             'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
             'x-rapidapi-key': process.env.API_KEY_VALUE,
           },
         };
        
        const result = await axios.request(options);
        
         res.status(200).json(result.data);
    } catch (error) {
        console.log(error)
       res.status(500).json({error});
   }
});



module.exports = router
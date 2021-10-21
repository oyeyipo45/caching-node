const express = require('express')
const router = express.Router()
const needle = require('needle')
const url = require('url')
const axios = require('axios').default;

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get('/', async (req, res) => {
    try {


    //     console.log(API_KEY_VALUE);

        console.log(url.parse(req.url, true).query.q);
        const params = new URLSearchParams({
            [API_KEY_NAME] : API_KEY_VALUE
        })

    //     console.log(params)
       
    //    const apiRes = await needle('get', `${API_BASE_URL}?${params}`);
    //     const data = apiRes.body;
    //     res.status(200).json(data);
         const options = {
           method: 'GET',
           url: 'https://community-open-weather-map.p.rapidapi.com/weather',
           params: { ...url.parse(req.url, true).query.q },
           headers: {
             'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
             'x-rapidapi-key': process.env.API_KEY_VALUE,
           },
         };
        
         const result = await axios.request(options);

         res.status(200).json(result);
   } catch (error) {
       res.status(500).json({error});
   }
});



module.exports = router
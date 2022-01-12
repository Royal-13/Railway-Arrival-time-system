const axios = require("axios");

module.exports = {
    getdata: (trainId) => axios({
        method: 'POST',
  url: 'https://indian-railway-live-train.p.rapidapi.com/train-lists',
  params: {trainNumber: '12018'},
  headers: {
    'x-rapidapi-host': 'indian-railway-live-train.p.rapidapi.com',
    'x-rapidapi-key': //Write your api key here
  },
  params: {
    trainId : trainId
}
})
}


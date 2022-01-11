const axios = require("axios");

module.exports = {
    getdata: (trainId) => axios({
        method: 'POST',
  url: 'https://indian-railway-live-train.p.rapidapi.com/train-lists',
  params: {trainNumber: '12018'},
  headers: {
    'x-rapidapi-host': 'indian-railway-live-train.p.rapidapi.com',
    'x-rapidapi-key': 'e982b061e3msh873a79c33eca3b1p12c28ejsn710588bea809'
  },
  params: {
    trainId : trainId
}
})
}


const axios = require('axios');

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.apparyllis.com:8443/v1/member/0g7fefwPmSTRGH7FKjs366EkQEP2/:docId',
  headers: { 
    'Authorization': 'G46zPi4dDLgthAPEIAc6K/K+Ar9Jo/tSCAnLbchAschbplhg3X9s/OkasaxEMPeQ'
  }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
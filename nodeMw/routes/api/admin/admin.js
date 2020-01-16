const express =  require('express');
const router = express.Router();

const userAccount = {email:'test@abc.com', password:'123456'};
const fundingRequests = [{fRName:"Housing for refugees", fund:'10000', admin:'TCS'},
                                {fRName:"Food for africa", fund:'100000', admin:'TCS'},
                                {fRName:"Shelter for poor", fund:'10000', admin:'TCS'}
                            ];

// authenicate the user
router.post('/', (req, res) => {

    const admin = req.body;
    const data = { isAuthenticated: false, email: null };
    if(admin.email === userAccount.email && admin.password === userAccount.password){
        data.isAuthenticated = true;
        data.email = admin.email;
    }
    res.send( data );

});

// get funding requests
router.get('/', (req, res) => {    
    res.send( fundingRequests );
});

module.exports = router;
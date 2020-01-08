const express =  require('express');
const router = express.Router();

//Get all the funding requests
router.get('/', (req, res) => res.send('all the funding..'));

//create funding request
router.post('/', (req, res) => {

})

//make the payment for the request once voted
router.post('/make-payment', (req, res) => {

})

module.exports = router;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FundListing = () => {

    const [fundingRequests, setFundingRequests] = useState([{}]);
    
    useEffect( () => {

        let res = [];

        async function fetchData() {

            try {
                res = await axios.get('http://localhost:4000/api/admin');
                console.log(res.data);
                
            } catch (error) {
                
            }
       
        }
        fetchData();
        
        
    });
    
    return (
        <div>
            Fund listing..
        </div>
    )
}

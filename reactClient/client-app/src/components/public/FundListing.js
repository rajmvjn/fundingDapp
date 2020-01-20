import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export const FundListing = () => {

    const [fundingRequests, setFundingRequests] = useState([{}]);
    let res = [];
    
    useEffect( () => {        

        async function fetchData() {

            try {
                res = await axios.get('http://localhost:4000/api/admin');                
                setFundingRequests(res.data);
                
            } catch (error) {
                
            }
       
        }
        fetchData();       
        
    },[res.data]);

    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Project</th>
                        <th scope="col">Fund Required</th>
                        <th scope="col">Admin</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                    fundingRequests.map( (fRequest, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{ fRequest.fRName }</td>
                                <td>{ fRequest.fund }</td>
                                <td>{ fRequest.admin }</td>
                            </tr> 
                        )
                    })
                }                                       
                </tbody>
            </table>
        </Fragment>
    )
}

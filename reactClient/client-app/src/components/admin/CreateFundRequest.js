import React from 'react'

export const CreateFundRequest = ({ fundRequests }) => {
    if ( fundRequests ) {
        return <div>List the fund requests..</div>;
      } else {
        return <div>No fund requests for listing ..</div>;
      }
}

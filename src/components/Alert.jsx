import React from 'react'

export default function Alert(props) {
    // creatig function to captilize the S  of the success
    const capitilize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // lower.slice(1) means first letter ko chhodkar sbko lower case mechange kr do
    }
    return ( //props.alert && means if the value of props.alert is null then do not execute further if it have some value then go further in alert div becz if it is null and pass to the div then through error
        
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capitilize(props.alert.type)}:</strong> {props.alert.msg}
            </div>
            
            )
        }

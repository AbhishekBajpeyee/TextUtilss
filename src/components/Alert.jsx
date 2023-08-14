import React from 'react'

export default function Alert(props) {
    // creatig function to captilize the S  of the success
    const capitilize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // lower.slice(1) means first letter ko chhodkar sbko lower case mechange kr do
    }
    return ( //props.alert && means if the value of props.alert is null then do not execute further if it have some value then go further in alert div becz if it is null and pass to the div then through error
         
    //   when the alert showing then website content shifting downward and when alert dismissing content shifting at its position this is called "CLS" ==> Cumulative Layout Shift this should be min to min in website so we are going to fix it with setting the height of alert and taking it in div
    <div  style={{height:'50px', width: "cover"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capitilize(props.alert.type)}:</strong> {props.alert.msg} 
                {/* Here we took in { } bcz props.alert  it is js and inside container we cant put it without {}  */}
            </div>}
            </div>
            )
        }

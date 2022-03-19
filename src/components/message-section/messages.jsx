import { useState } from "react";

function Message({messageArray}) {


    return (  
        <div className="message">
            <h1>Message</h1>
            <div className="showMessageArray">
            {
                messageArray.map(text => {
                    return(
                        <p>{text}</p>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Message;
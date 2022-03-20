import { useDispatch, useSelector } from "react-redux";


function Message({}) {

    const messageArray = useSelector((state) => state.message.messages)

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
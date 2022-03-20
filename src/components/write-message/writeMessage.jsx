import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messageSlice";


function WriteMessage() {

    const dipatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        dipatch(addMessage(e.target[0].value))
        e.target[0].value = ""
    }

    return (  
        <div className="writeMessage">
            <form onSubmit={e =>handleSubmit(e)}>
                <input type='text'/>
            </form>
        </div>
    );
}

export default WriteMessage;
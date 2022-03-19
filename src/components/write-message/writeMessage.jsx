function WriteMessage({handleSubmit}) {
    return (  
        <div className="writeMessage">
            <form onSubmit={e =>handleSubmit(e)}>
                <input type='text'/>
            </form>
        </div>
    );
}

export default WriteMessage;
import {useState, useRef} from "react"

function UserDataForm({user, onSelect}) {

    const inputRef = useRef(null);
  
    return(
        <div>
            <h3>Enter your Github Username</h3>
            <input
            ref={inputRef}
            type="text"
            id="message"
            name="message"
            />
    
            <button onClick={() => onSelect(inputRef.current.value)}>Update</button>
        </div>
    );
  }

export default UserDataForm;
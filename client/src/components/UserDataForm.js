import {useState, useRef} from "react"

function UserDataForm({user, onSelect}) {

    const inputRef = useRef(null);
  
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="grid h-screen place-content-center text-white">
            <h1 className="col-span-6 font-sans text-xl">Search your Github Username</h1>
            <input 
            className="text-black font-bold rounded-full col-span-6 py-2 px-4"
            ref={inputRef}
            type="text"
            id="message"
            name="message"
            />
    
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full col-span-6 mt-1" onClick={() => onSelect(inputRef.current.value)}>Search</button>
        </div>
        </div>
        
    );
  }

export default UserDataForm;
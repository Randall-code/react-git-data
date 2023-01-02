import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react"


function UserData({user}) {
 
  return(
      <p>{user.name}</p>
  );
}




function App() {

  const inputRef = useRef(null);

  const [githubUser, setGithubUser] = useState(null);
  const [githubUserData, setGithubUserData] = useState(null);
  

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setGithubUser(inputRef.current.value);
  }; 
  

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}`)
      .then((res) => {
        if(!res.ok) throw new Error(res.status)
        else return res.json()
      })
      .then(data => setGithubUserData(data))
      .catch((error) => {
        console.log('error: ' + error);
      });
  }, [githubUser]);

  console.log(githubUserData);
  return (
    <div className="App">
      <h3>Enter your Github Username</h3>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button onClick={handleClick}>Update</button>
        
      {/* < UserData user={githubUSer} /> */}
      {githubUserData ? < UserData user={githubUserData} /> : null}
    </div>
  );
}

export default App;
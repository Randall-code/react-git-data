import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react"
import UserDataForm from "./components/UserDataForm"
import UserInfo from "./components/UserInfo";

function App() {

  const [githubUser, setGithubUser] = useState(null);
  const [githubUserData, setGithubUserData] = useState({login: "null"});
  
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

  return (
    <div className="App">
      < UserDataForm user={githubUser} onSelect={(user) => setGithubUser(user)} />
      { githubUserData.login != "null" ? < UserInfo user={githubUserData}/> : null }
    </div>
  );
}

export default App;
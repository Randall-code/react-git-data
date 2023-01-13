import { useState, useEffect, useRef } from "react"
import UserDataForm from "./components/UserDataForm"
import UserInfo from "./components/UserInfo";
import {useFetch} from "./components/useFetch"

function App() {

  const [githubUser, setGithubUser] = useState(null);
  const [githubUserData, setGithubUserData] = useState({login: "null"});

  const userData = useFetch(`https://api.github.com/users/${githubUser}`);
  
  if (userData.loading) return <div><h1>Loading...</h1></div>
  if (userData.error) return <div><pre>{JSON.stringify(userData.error, null, 2)}</pre></div>

  if(userData.data.login !== "null") {
    return < UserInfo user={userData.data}/>
  } else{
    return < UserDataForm user={githubUser} onSelect={(user) => setGithubUser(user)} /> 
  }

  // return (
  //   <div className="h-screen bg-slate-800">
  //     <div className="text-slate-400 ">
        
  //     </div>
  //   </div>

  // );
    
}

export default App;
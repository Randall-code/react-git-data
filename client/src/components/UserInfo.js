import {BsFillArrowDownCircleFill} from "react-icons/bs"

function UserInfo({user}) {
    return(
      <div className="flex place-content-center flex-col h-screen text-white mx-3">
        <div className="flex justify-center">
          <img className="rounded-full outline outline-offset-2 outline-white my-3" src={user.avatar_url}/>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col divide-y">
            <h1> {user.login}</h1>
            <h1> {user.name}</h1>
            <h1> {user.location}</h1>
          </div>
        </div>

        

        <div className="flex justify-center animate-bounce mt-3">
            <BsFillArrowDownCircleFill size={50} />
        </div>
      </div>
    );
  }

export default UserInfo;
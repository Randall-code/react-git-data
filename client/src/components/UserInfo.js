function UserInfo({user}) {
    return(
      <div>
        <h1> {user.login}</h1>
        <img height={400} width={400} src={user.avatar_url}/>
      </div>
    );
  }

export default UserInfo;
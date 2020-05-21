import React, {useEffect, useState} from 'react';
import api from "./services/api";
import Usuario from "./components/Usuario";

interface IUser{
  name: String;
  email?: String;
}
function App() {
const [users, setUsers] = useState<IUser[]>([]);


useEffect(()=>{
  api.get<IUser[]>("/user").then(response =>{
    setUsers(response.data);
  });
},[]);
  return (
    <div>
      {users.map(user => <Usuario  user={user} />)}
    </div>
  );
}

export default App;

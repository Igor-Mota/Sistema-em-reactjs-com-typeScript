import React from "react";

interface IUser{
    name: String;
    email?: String;
  }

  interface Props {
      user: IUser
  }
const Usuario: React.FC<Props> = ({ user }) =>{
    return(

        <div>
            <strong>Nome: </strong> {user.name} <br/>
            <strong>E-mail: </strong> {user.email || "não possui email"} <br/>
        </div>
    );

}

export default Usuario;
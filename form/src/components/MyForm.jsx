import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
          e.preventDefault();

          console.log(name, email)
    }

    console.log(name, email)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome</label>            
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name || ""}/>
            </div>
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
            </label>
            <input type="submit" value="enviar"/>
        </form>        
    </div>
  )
}

export default MyForm
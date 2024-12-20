import { useState } from "react";

export default function login(){
    const [email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    function handleSubmit(event){
        event.preventDefault();

    }
    return(
        <div>
            <div>
                <form >
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder="Enter your email" onChange={()=> e.setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" placeholder="Enter your Password" onChange={()=> e.setPassword(e.target.value)}/>
                    </div>
                    <button>login</button>
                </form>
            </div>
        </div>
    );
}
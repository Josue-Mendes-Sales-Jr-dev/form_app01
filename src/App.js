/* eslint-disable no-unused-vars */
import "tailwindcss/tailwind.css";
import { Input } from "./components/input";
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from "zod"
import { useState } from "react";

const createUserFormSchema=z.object({

})

function App() {
  const [output, setOutput]=useState('')
  const {
   register,
   SubmitHandler,
  }=useForm()

  const onSubmit= (data) =>{ 
    setOutput(JSON.stringify(data,null,2))
    console.log(data)}

  return (
   <div className=" bg-slate-800 w-screen h-screen flex items-center justify-center">
    
    <form className=" w-1/3 h-1/2 text-white flex flex-col gap-5 items-center justify-center" >
      <div className="flex flex-col gap-1 w-[80%]">
        <label htmlFor="name">name</label>
         <Input {...register("name")}/>
      </div>
      <div className="flex flex-col gap-1 w-[80%]">
        <label htmlFor="email">email</label>
         <Input {...register("email")}/>
      </div>
      <div className="flex flex-col gap-1 w-[80%]">
        <label htmlFor="password">senha</label>
         <Input {...register("password")}/>
      </div>
      <button 
      className="bg-green-600 w-[80%] h-[2.5rem] text-white rounded-md hover:bg-green-500" 
      type="submit">Enviar</button>
    </form>  
     
     <pre>
      {output}
     </pre>
   </div>
  );
}

export default App;

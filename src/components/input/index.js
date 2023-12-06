import "tailwindcss/tailwind.css"

export const Input=(props)=>{
    return(
        <>
          <input className="w-[100%] h-[2.5rem] rounded-md bg-green-300" {...props}/>
        </>
    )
}
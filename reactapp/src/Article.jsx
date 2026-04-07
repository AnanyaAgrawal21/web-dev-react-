import { useState } from "react"

function Article(){
    const[count,setCount]=usesState(0)
    const[age,setAge]=useState(0)
    const[name,setName]=useState("")
    //let count=0
    const handleIncrement=()=>{
        //count=count+1
        setCount(count+1)
        console.log(count)
    }
    return (
        <div>
            <h2>Article</h2>
            <p>Lorem ipsum dolor sit amet consectetur adispiscing elit. Atque maiores nemo obcaeca</p>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
         </div>
    )
}

export default Article 
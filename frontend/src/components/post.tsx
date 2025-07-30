import {useState} from "react"

const Post = () => {
    const [input, setInput] = useState('')
    const sendPost = () => {
        fetch("http://localhost:3000/api/sendPost",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: 0, text: input})
        }).then(resp => alert("Se ha subido el post :D"))
        .catch(err => alert(`No se ha podido subir, error: ${err}`))
    }

    return (
        <>
            <label htmlFor="texto">Cuentalo DEV!</label>
            <input id="texto" placeholder="Que bug resolviste?" type="text"
            onChange={(e)=>setInput(e.target.value)} value={input}
            ></input>
            <button onClick={sendPost}>Deploy</button>
        </>
    )
}

export default Post;
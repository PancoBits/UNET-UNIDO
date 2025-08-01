import {useState} from "react"

const Post = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [carga, setCarga] = useState('')
    const sendPost = () => {
        const formData = new FormData();
        if (image) {
            formData.append("image", image);
        }
        formData.append("text", input);
        fetch("http://localhost:3000/api/sendPost",{
            method: "POST",
            body: formData
        }).then(resp => alert("Se ha subido el post :D"))
        .catch(err => alert(`No se ha podido subir, error: ${err}`))
    }

    /*const obj = async () =>{
        const resp = await fetch("http://localhost:3000/api/getPost/5").then(res => res.json())
        setCarga("http://localhost:3000/"+resp.MULTIMEDIA)
    }*/

    return (
        <>
            <label htmlFor="texto">Cuentalo DEV!</label>
            <input id="texto" placeholder="Que bug resolviste?" type="text"
            onChange={(e)=>setInput(e.target.value)} value={input}
            ></input>
            <br></br>
            <input type="file" name="image" accept="image/*" onChange={e => setImage(e.target.files ? e.target.files[0] : null)}/>
            <br></br>
            <button onClick={sendPost}>Deploy</button>
        </>
    )
}

export default Post;
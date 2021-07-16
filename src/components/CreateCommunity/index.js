import React, { useEffect, useState } from "react";

import { Title, Form } from "./styles";

import { useDefineCommunity } from "../../context/Community";
import { createCommunity } from "../../utils/datoConfig";

export default function CreateCommunity() {
    const [imgFile, setImgFile] = useState();
    const [warning, setWarning] = useState();
    const [imgWarning, setImgWarning] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [owner, setOwner] = useState();
    const { defineCommunity, setDefineCommunity } = useDefineCommunity();
    const [imgURL, setImgURL] = useState();



    function handleImageFile(e) {
        if(imgFile) {
            setImgFile();
        }

        if(imgWarning) {
            setImgWarning();
        }

        if(e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpeg") {
            setImgWarning("Formato de imagem não válido, tente novamente");
            return;
        } 

        setImgFile(e.target.files[0]);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =  function(e){
            setImgURL(e.target.result);
        };
        
    };

    async function handleCreateCommunity() {
        if(warning) {
            setWarning();
        }

        if(!title || !description || !imgFile || !owner) {
            setWarning("Todos os campos são obrigatórios!");
            return;
        }

        setWarning("Carregando"); 
        createCommunity(title, description, imgFile, owner)
            .then(() => {
                const newCommunity = {
                    title: title,
                    description: description,
                    cover_image: imgURL,
                    owner: owner   
                }
                setDefineCommunity([...defineCommunity, newCommunity]);
        
                setTitle('');
                setDescription('');
                setImgFile('');
                setImgURL('');
                setOwner('');
            })
    }

    return (
        <>
            <Title>Criar comunidade</Title>

            <Form>
                <input 
                    type='text' 
                    placeholder='Qual vai ser o nome da sua comunidade?'
                    value={title || ''}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type='textarea'
                    placeholder='Digite uma descrição para sua comunidade'
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Quem é o dono dessa comunidade?'
                    value={owner || ''}
                    onChange={(e) => setOwner(e.target.value)}
                />

                <div className='cover-image-wrap'>
                    <p>Imagem de capa:</p>
                    <div className='cover-image'>
                        <label htmlFor='input-file'>Escolher</label>
                        <input 
                            type='file'
                            id="input-file"
                            onChange={(e) => handleImageFile(e)}
                            accept="image/png, image/jpeg"
                        />
                    </div>
                </div>
                {imgFile && <p className='file-name'>Imagem escolhida: {imgFile.name}</p>}
                {imgWarning && <p className='warning'>{imgWarning}</p>}

                {warning && <p className='warning'>{warning}</p>}
                <button onClick={handleCreateCommunity}>Criar Comunidade</button>

            </Form>
        </>
    )
}
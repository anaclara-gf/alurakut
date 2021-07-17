import { FontConfig, Main, Box, DescriptionBox } from './styles';

import React, { useState } from 'react';
import nookies from 'nookies';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [githubUser, setGithubUser] = useState();
    const [warning, setWarning] = useState({status: false, message: ''});

    async function handleLogin() {
        if(!githubUser) {
            warning.status = true;
            warning.message = "Usuário obrigatório!";
            setWarning({...warning});
            return;
        }

        const githubResponse = await fetch(`https://api.github.com/users/${githubUser}`);
        const githubData = await githubResponse.json();

        if(githubData.message === 'Not Found'){
            warning.status = true;
            warning.message = "Usuário não existe!";
            setWarning({...warning});
            return;
        }

        const fetchInfo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ githubUser: githubUser })
        }
        const loginResponse = await fetch('https://alurakut.vercel.app/api/login', fetchInfo);
        const data = await loginResponse.json();
        const token = data.token;

        nookies.set(null, 'USER_TOKEN', token, {
            path: ['/'],
            maxAge: 8640*7
        })
        router.push('/')
    }

    return (
        <FontConfig>
            <Main>
                <DescriptionBox>
                    <img className='logo' src='http://alurakut.vercel.app/logo.svg' />
                    <p className='login-description'><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p className='login-description'><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p className='login-description'><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
                </DescriptionBox>
                <div className='login'>
                    <Box>
                        <p>Acesse agora mesmo com seu usuário do <b>GitHub!</b></p>
                        <input 
                            type="text"
                            placeholder="Usuário Github" 
                            onChange={(e) => setGithubUser(e.target.value)}
                        />
                        {warning.status && <p className='warning'>{warning.message}</p>}
                        <button onClick={ handleLogin }>Login</button>
                    </Box>
                    <Box>
                        <p>Não tem uma conta Github?</p>
                        <Link href='https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home'>
                            <a>CRIE A SUA</a>
                        </Link>
                    </Box>
                </div>
            </Main>
        </FontConfig>
    )
}
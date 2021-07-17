import data from '../../utils/users.json';
import React from 'react';

import { Title, ProfileNumbers, EachProfileNumber, Transparency, Tooltip } from './styles';

export default function Welcome() {
    const [hoverMessage, setHoverMessage] = React.useState(false);

    return (
        <>
        <Title>
            <p className='welcomeName'>Bem vindo(a), {data.owner.name}</p>
            <p className='todaysLucky'><b>Sorte de hoje:</b> O melhor profeta do futuro é o passado</p>
        </Title>
        <ProfileNumbers>
            {data.owner.data.map(eachIcon => (
                <EachProfileNumber key={Math.random()}>
                    <p className='label'>{eachIcon.label}</p>
                    <div className='icon-and-number'>
                        <img src={eachIcon.icon} />
                        <p className='number'>{eachIcon.data.length}</p>
                    </div>
                </EachProfileNumber>
            ))}
            {data.owner.percentageData.map(eachIcon => (
                <EachProfileNumber key={Math.random()}>
                    <p className='label'>{eachIcon.label}</p>
                    <div className='icons'>
                        <img src={eachIcon.icon} />
                        <img src={eachIcon.icon} />
                        <img src={eachIcon.icon} />
                        <Transparency size={eachIcon.percentage} />
                    </div>
                </EachProfileNumber>
            ))}
        </ProfileNumbers>
        </>
    )
};
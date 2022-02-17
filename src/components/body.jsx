import React from 'react';
import Button from './button';
import Google_logo from '../images/Google_logo.svg';
import Input from './input';

const Body = () => {
    return (
        <>
            <div className='Body'>
                <div className='imgBody'>
                <img src={Google_logo} className="Google-logo" alt="logo" />
                </div>
                <Input />
                <div className='buttonBody'>
                    <Button text={'Поиск в Google'} />
                    <Button text={'Мне повезёт!'} />
                </div>

            </div>
        </>
    );
};

export default Body;

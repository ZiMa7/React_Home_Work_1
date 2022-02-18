import React from 'react';
import Button from './button';
import googleLogo from '../images/Google_logo.svg';
import Input from './input';

const Body = () => {
    return (
            <div className='body'>
                <div className='imgBody'>
                <img src={googleLogo} className="googleLogo" alt="logo" />
                </div>
                <Input />
                <div className='buttonBody'>
                    <Button text={'Поиск в Google'} />
                    <Button text={'Мне повезёт!'} />
                </div>
            </div>
    );
};

export default Body;

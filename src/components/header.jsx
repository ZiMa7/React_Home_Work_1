import React from 'react';
import Button from './button';
import Link from './link';

const Header = () => {
    return (
            <div className='header'>
                <div className='buttonHeader'>
                    <Button text = {''}/>
                   <div className='btnAvatar'> <Button text = {''}/></div>
                </div>
                <div className='linkHeader'>
                    <Link text = {'Почта'}/>
                    <Link text = {'Картинки'}/>
                </div>
            </div>
    );
};

export default Header;

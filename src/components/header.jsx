import React from 'react';
import Button from './button';
import Link from './link';

const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className='buttonHeader'>
                    <Button text = {''}/>
                   <div className='btn-2'> <Button text = {''}/></div>
                </div>
                <div className='linkHeader'>
                    <Link text = {'Почта'}/>
                    <Link text = {'Картинки'}/>
                </div>
            </div>
        </>
    );
};

export default Header;

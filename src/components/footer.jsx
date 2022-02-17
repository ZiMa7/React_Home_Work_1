import React from 'react';
import Link from './link';
import Language from './language';

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='languageFooter'>
                    <Language text = {'Українська'}/>
                </div>
                <div className='linkFooter'>
                    <div className='aboutLink'>
                    <Link text = {'Всё о Google'}/>
                    <Link text = {'Реклама'}/>
                    <Link text={'Для бизнеса'}/>
                    <Link text={'Как работает Google Поиск'}/>
                    </div>
                    <div className='navLink'>
                    <Link text={'Конфиденциальность'}/>
                    <Link text={'Условия'}/>
                    <Link text={'Настройки'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer

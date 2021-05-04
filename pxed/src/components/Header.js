import './Header.css';
import Avatar from '../assets/Profile-thumbnail.png'

function Header() {
    return (
        <div className='header'>
            <div className='header__left' >
                <div className='header__icon'>
                <h5> icon </h5>
                </div>
               
                <h4> Edit project heading </h4>
            </div>

            <div className='header__right'>
                <h4> upgrade </h4>
                <h3>Avatar</h3>
            </div>
        </div>
    )
}

export default Header

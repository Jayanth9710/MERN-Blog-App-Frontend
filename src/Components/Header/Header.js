import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__title'>
                <span className='header__sm__span'></span>
                <span className='header__lg__span' ></span>
            </div>
            <img className='header__img' src='https://cdn.lifehack.org/wp-content/uploads/2013/07/best-blogs-1024x768.jpeg'></img>
        </div>
    )
}

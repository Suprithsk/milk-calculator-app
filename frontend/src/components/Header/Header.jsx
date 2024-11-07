import { useEffect,useState } from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/signin')
        }else{
            setIsSignedIn(true)
        }
    }, [navigate])
    const signOutHandler = () => {
        localStorage.removeItem('token')
        navigate('/signin')
    }
    return (
        <header className={styles.header}>
            <h3>Milk Tracker</h3>
            
            {isSignedIn && <button className={styles.signin_btn} onClick={signOutHandler}>Sign Out</button>}
            {!isSignedIn && <button className={styles.signout_btn}>Sign In</button>}
        </header>
    )
}

export default Header
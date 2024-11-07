import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Header from "../../components/Header/Header"
import MilkForm from "../MilkForm/MilkForm"

function HomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            console.log('token not found')
            navigate('/signup')
        }
    }, [navigate])

    return (
        <div>
            <Header />  
            <MilkForm/>
        </div>
    )
}

export default HomePage
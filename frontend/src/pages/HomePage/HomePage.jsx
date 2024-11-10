import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Header from "../../components/Header/Header"
import MilkForm from "../MilkForm/MilkForm"
import { buyMilkOrCurd } from "../../apis/milkApi"
import styles from './HomePage.module.css'
import Analytics from "../Analytics/Analytics"
import { Toaster, toast } from 'react-hot-toast';
import TransactionsTable from "../TransactionsTable/TransactionsTable"
import MissedDates from "../MissedDates/MissedDates"

function HomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            console.log('token not found')
            navigate('/signup')
        }
    }, [])
    
    const handleAsyncOperation = async (milk, clearForm) => {
        try {
            await toast.promise(
                buyMilkOrCurdFunc(milk, clearForm),
                {
                    loading: 'Submitting your request...',
                    success: 'Milk and curd purchased successfully!',
                    error: (e) => {
                        if(e?.response?.data?.msg){
                            return e.response.data.msg
                        }
                        return 'An error occurred. Please try again.'
                    },
                }
            );
        } catch (e) {
            console.error('Error caught in handleAsyncOperation:', e);
        }
    };

    const buyMilkOrCurdFunc = async (milk, clearForm) => {
        console.log('func called', milk);
        let curd = milk.curdQuantity === '' ? null : { quantity: Number(milk.curdQuantity) };
        let token = localStorage.getItem('token');
        try {
            const response = await buyMilkOrCurd(
                {
                    milk: {
                        quantity: Number(milk.milkQuantity),
                    },
                    purchasedDate: new Date(milk.milkDate).setUTCHours(0, 0, 0, 0),
                    curd: curd,
                },
                token
            );

            console.log('API response:', response);
            clearForm(); // Clear the form if the request is successful
            return response; // Return the response to indicate success
        } catch (e) {
            console.error('Error in buyMilkOrCurdFunc:', e);
            throw e; // Ensure the error is propagated
        }
    };

    return (
        <div>
            <Toaster />
            <Header />
            <MilkForm propsBuyMilkOrCurd={handleAsyncOperation} />
            <div className={styles.second_div}>
                <Analytics />
                <TransactionsTable />
            </div>
            <div className={styles.second_div}>
                <MissedDates />
            </div>
        </div>
    )
}

export default HomePage
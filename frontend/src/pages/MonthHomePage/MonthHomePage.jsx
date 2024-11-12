import styles from './MonthHomePage.module.css'
import Header from '../../components/Header/Header'
import { Toaster, toast } from 'react-hot-toast'
import { useState } from 'react'

const MonthHomePage = () => {
    const [month, setMonth] = useState('')
    const monthChangeHandler = (e) => {
        console.log(e.target.value)
        setMonth(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(month==='') {
            toast.error('Please fill the month')
            return
        }
        console.log(month)
    }

    return (
        <>
            <Toaster />
            <Header />
            <div className={styles.month_home_page}>
                <div className={styles.month_analyze_div}>
                    <div className={styles.milk_form_div}>
                        <div className={styles.milk_form}>
                            <h2>Enter Month to get details</h2>
                            <form >
                                <div className={styles.form_group}>
                                    <label htmlFor="month">Month</label>
                                    <input type="month" id="month" required value={month} onChange={monthChangeHandler}/>
                                </div>
                                <div className={styles.submit_div}>
                                    <button onClick={submitHandler}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonthHomePage
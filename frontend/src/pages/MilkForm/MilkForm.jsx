import styles from './MilkForm.module.css'
import { useState } from 'react'

const MilkForm = () => {
    const [curdVisible, setCurdVisible] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        const milk_quantity = e.target.milk_quantity.value
        const milk_date = e.target.milk_date.value
        let curd_quantity = 0
        if (curdVisible) {
            curd_quantity = e.target.curd_quantity.value
        }
        console.log(milk_quantity, curd_quantity, milk_date)
    }
    return (
        <div className={styles.milk_form_div}>
            <div className={styles.milk_form}>
                <h2>Enter Milk Details</h2>
                <form onSubmit={submitHandler}>
                    <div className={styles.form_group}>
                        <label htmlFor="milk_quantity">Milk Quantity</label>
                        <input type="number" id="milk_quantity" required  />
                    </div>
                    <div className={styles.form_group}>
                        {!curdVisible && <button className={styles.add_curd_btn} onClick={() => setCurdVisible(true)}>Add Curd</button>}
                        {curdVisible && <button className={styles.add_curd_btn} onClick={() => setCurdVisible(false)}>Remove Curd</button>}
                    </div>
                    {curdVisible && <div className={styles.form_group}>
                        <label htmlFor="curd_quantity">Curd Quantity</label>
                        <input type="number" id="curd_quantity" required />
                    </div>}
                    <div className={styles.form_group}>
                        <label htmlFor="milk_date">Milk Date</label>
                        <input type="date" id="milk_date" required />
                    </div>
                    <div className={styles.submit_div}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MilkForm
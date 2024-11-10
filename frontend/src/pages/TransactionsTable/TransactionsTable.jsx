import styles from './TransactionsTable.module.css'
const analyticsData = {
    "purchases": [
        {
            "milk": {
                "milkId": {
                    "_id": "6725da2c3c41b27cfa1c95ed",
                    "price": 27,
                    "User": "6723b58dec7981b12dc0a6b0",
                    "__v": 0
                },
                "quantity": 2
            },
            "curd": {
                "curdId": {
                    "_id": "6725da283c41b27cfa1c95e8",
                    "price": 27,
                    "User": "6723b58dec7981b12dc0a6b0",
                    "__v": 0
                },
                "quantity": 1
            },
            "_id": "672cf8859a0875d04cd2178f",
            "User": "6723b58dec7981b12dc0a6b0",
            "purchaseDate": "2024-11-05T00:00:00.000Z",
            "totalPriceOfPurchase": 81,
            "__v": 0
        },
        {
            "milk": {
                "milkId": {
                    "_id": "6725da2c3c41b27cfa1c95ed",
                    "price": 27,
                    "User": "6723b58dec7981b12dc0a6b0",
                    "__v": 0
                },
                "quantity": 2
            },
            "curd": {
                "curdId": {
                    "_id": "6725da283c41b27cfa1c95e8",
                    "price": 27,
                    "User": "6723b58dec7981b12dc0a6b0",
                    "__v": 0
                },
                "quantity": 1
            },
            "_id": "672d0bf0915ef3f9484e2736",
            "User": "6723b58dec7981b12dc0a6b0",
            "purchaseDate": "2024-11-01T00:00:00.000Z",
            "totalPriceOfPurchase": 81,
            "__v": 0
        },
        {
            "milk": {
                "milkId": {
                    "_id": "6725da2c3c41b27cfa1c95ed",
                    "price": 27,
                    "User": "6723b58dec7981b12dc0a6b0",
                    "__v": 0
                },
                "quantity": 1
            },
            "_id": "672f5b0c9b9f401410b65d69",
            "User": "6723b58dec7981b12dc0a6b0",
            "purchaseDate": "2024-11-08T00:00:00.000Z",
            "totalPriceOfPurchase": 27,
            "__v": 0
        },
        {
            "milk": {
            "milkId": {
                "_id": "6725da2c3c41b27cfa1c95ed",
                "price": 27,
                "User": "6723b58dec7981b12dc0a6b0",
                "__v": 0
            },
            "quantity": 3
            },
            "curd": {
            "curdId": {
                "_id": "6725da283c41b27cfa1c95e8",
                "price": 27,
                "User": "6723b58dec7981b12dc0a6b0",
                "__v": 0
            },
            "quantity": 2
            },
            "_id": "6730a1b59a0875d04cd21790",
            "User": "6723b58dec7981b12dc0a6b0",
            "purchaseDate": "2024-11-10T00:00:00.000Z",
            "totalPriceOfPurchase": 135,
            "__v": 0
        },
        {
            "milk": {
            "milkId": {
                "_id": "6725da2c3c41b27cfa1c95ed",
                "price": 27,
                "User": "6723b58dec7981b12dc0a6b0",
                "__v": 0
            },
            "quantity": 1
            },
            "curd": {
            "curdId": {
                "_id": "6725da283c41b27cfa1c95e8",
                "price": 27,
                "User": "6723b58dec7981b12dc0a6b0",
                "__v": 0
            },
            "quantity": 1
            },
            "_id": "6731b2c59a0875d04cd21791",
            "User": "6723b58dec7981b12dc0a6b0",
            "purchaseDate": "2024-11-11T00:00:00.000Z",
            "totalPriceOfPurchase": 54,
            "__v": 0
        },
    ],
    
    "totalAmount": 189,
    "startDate": "2024-11-01T00:00:00.000Z",
    "endDate": "2024-11-09T00:00:00.000Z"
}
const TransactionsTable = () => {
    const options={ year: 'numeric', month: 'long', day: 'numeric'}

    return (
        <div style={{marginTop: '20px'}}>
            <h2>Transactions</h2>
            <div className={styles.table_div}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Milk Quantity</th>
                            <th>Curd Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analyticsData.purchases.map((purchase) => (
                            <tr key={purchase._id}>
                                <td>{new Date(purchase.purchaseDate).toLocaleString('en-US', options)}</td>
                                <td>{purchase.milk.quantity}</td>
                                <td>{purchase.curd ? purchase.curd.quantity : 0}</td>
                                <td>{purchase.totalPriceOfPurchase}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransactionsTable
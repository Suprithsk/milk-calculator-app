import { TriangleAlert } from 'lucide-react';

const missedDates = [
    "2024-03-02T00:00:00.000Z",
    "2024-03-03T00:00:00.000Z",
    "2024-03-04T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
    "2024-03-06T00:00:00.000Z",
    "2024-03-07T00:00:00.000Z",
    "2024-03-08T00:00:00.000Z",
    "2024-03-09T00:00:00.000Z",
    "2024-03-10T00:00:00.000Z",
    "2024-03-11T00:00:00.000Z",
    "2024-03-12T00:00:00.000Z",
    "2024-03-13T00:00:00.000Z",
    "2024-03-14T00:00:00.000Z",
    "2024-03-15T00:00:00.000Z",
    "2024-03-16T00:00:00.000Z",
    "2024-03-17T00:00:00.000Z",
    "2024-03-18T00:00:00.000Z",
    "2024-03-19T00:00:00.000Z",
    "2024-03-20T00:00:00.000Z",
    "2024-03-21T00:00:00.000Z",
    "2024-03-22T00:00:00.000Z",
    "2024-03-23T00:00:00.000Z",
    "2024-03-24T00:00:00.000Z",
    "2024-03-25T00:00:00.000Z",
    "2024-03-26T00:00:00.000Z",
    "2024-03-27T00:00:00.000Z",
    "2024-03-28T00:00:00.000Z",
    "2024-03-29T00:00:00.000Z",
    "2024-03-30T00:00:00.000Z",
    "2024-03-31T00:00:00.000Z"
  ]
import styles from './MissedDates.module.css'
const MissedDates = () => {
    const options={ year: 'numeric', month: 'long', day: 'numeric'}

    return (
        <div className={styles.missed_dates_div}>
            <div className={styles.first_div}>
                <TriangleAlert />
                <h2>Missed Dates</h2>
            </div>
            <div className={styles.elements_div}>
                {missedDates.map((date) => (
                    <div key={date} className={styles.element}>
                        <p>{new Date(date).toLocaleDateString('en-US',options)}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MissedDates
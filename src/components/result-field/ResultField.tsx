import styles from "./ResultField.module.css";

const ResultField = () => {
  return (
      // FIXME: p instead of div
      <p className={styles.container}>
          <span className={styles.preresult}>result</span>
          <span className={styles.result}>pre result</span>
      </p>
  )
}

export default ResultField
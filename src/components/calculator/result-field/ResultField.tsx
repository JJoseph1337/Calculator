import styles from "./ResultField.module.css";

const ResultField = () => {
	return (
		// FIXME: p instead of div
		<p className={styles.container}>
			<span className={styles.preresult}>preResult</span>
			<span className={styles.result}>Result</span>
		</p>
	);
};

export default ResultField;

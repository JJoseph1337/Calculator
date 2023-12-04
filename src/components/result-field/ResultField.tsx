import styles from "./ResultField.module.css";

const ResultField = ({ result, preResult }) => {
	return (
		<p className={styles.container}>
			<span className={styles.preresult}>{preResult}</span>
			<span className={styles.result}>{result}</span>
		</p>
	);
};

export default ResultField;

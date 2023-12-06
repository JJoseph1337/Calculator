import styles from "./ResultField.module.css";

interface ResultFieldProps {
	result: number;
	preResult: string;
}

const ResultField = ({
	result,
	preResult,
}: ResultFieldProps) => {
	return (
		<p className={styles.container}>
			<span className={styles.preresult}>{preResult}</span>
			<span className={styles.result}>{result}</span>
		</p>
	);
};

export default ResultField;

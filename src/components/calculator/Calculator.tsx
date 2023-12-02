import { useState } from "react";
import styles from "./Calculator.module.css";
import ResultField from "../result-field/ResultField";

const operations = {
	"+": (a: number, b: number) => a + b,
	"-": (a: number, b: number) => a - b,
	"*": (a: number, b: number) => a * b,
	"/": (a: number, b: number) => a / b,
	"22": (a: number) => a * a,
};

const Calculator = () => {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState(0);

	const handleNumberButtonClick = (value: number) => () => {
		setResult((prev) => {
			if (prev === 0) return (prev += value);
			return Number(prev.toString() + value);
		});
	};

	const handleOperationButtonClick =
		(operation: string) => () => {
			if (operation === "22") {
				setResult((prev) => operations[operation](prev));
				return;
			}

			if ((firstNumber && secondNumber) || secondNumber) {
				setFirstNumber(result);
				setResult(0);
				setOperation(operation);
				setSecondNumber(0);
				return;
			}

			if (result && firstNumber) {
				handleRepeatButtonClick();
				setResult(0);
				setOperation(operation);
				setSecondNumber(0);
				return;
			}

			if (firstNumber) {
				setOperation(operation);
				return;
			}

			setFirstNumber(result);
			setResult(0);
			setOperation(operation);
		};

	const handleEqualButtonClick =
		(operation: string) => () => {
			if (!result || !operation) return;

			if (secondNumber) {
				// TODO: P O N Y A T '
				setResult((prev) =>
					operations[operation](prev, secondNumber)
				);
				setFirstNumber(result);
				return;
			}

			setSecondNumber(result);
			// FIXME: change _result name
			const _result = operations[operation](
				firstNumber,
				result
			);
			setResult(_result);
		};

	const handleResetButtonClick = () => {
		setFirstNumber(0);
		setSecondNumber(0);
		// FIXME: setOperation par?
		setOperation("");
		setResult(0);
	};

	const handleDeleteButtonClick = () => {
		if (!result) return;

		if (firstNumber && secondNumber) {
			setFirstNumber(0);
			setSecondNumber(0);
			// FIXME: wrong parameter?
			setOperation("");
			return;
		}

		setResult((prev) => {
			if (prev.toString().length === 1) return (prev = 0);
			return prev.toString().slice(0, -1);
		});
	};

	return (
		<div className={styles.calculator}>
			<ResultField />
			calculator
		</div>
	);
};

export default Calculator;

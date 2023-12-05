import { useState } from "react";
import styles from "./Calculator.module.css";
import ResultField from "../result-field/ResultField";
import ButtonsContainer from "../buttons-container/ButtonsContainer";

type OperationType = "+" | "-" | "*" | "/" | "x2";

type OperationTypeValue =
	| ((a: number, b: number) => number)
	| ((a: number) => number);

const operations: Record<
	OperationType,
	OperationTypeValue
> = {
	"+": (a: number, b: number) => a + b,
	"-": (a: number, b: number) => a - b,
	"*": (a: number, b: number) => a * b,
	"/": (a: number, b: number) => a / b,
	x2: (a: number) => a * a,
};

const Calculator = () => {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [operation, setOperation] = useState<
		OperationType | undefined
	>();
	const [result, setResult] = useState(0);
  console.log("?")

	const preResult = `${firstNumber || ""} ${
		operation || ""
	} ${secondNumber || ""} ${secondNumber ? "=" : ""}`;

	const callbacks = {
		onNumberButtonClick: (value: number) => () => {
			setResult((prev) => {
				if (prev === 0) return (prev += value);
				return Number(prev.toString() + value);
			});
		},

		onRepeatButtonClick: () => {
			if (operation !== undefined) {
				setFirstNumber((prev) => {
					return operations[operation](prev, result);
				});
			}
		},

		onOperationButtonClick:
			(operation: OperationType) => () => {
				if (operation === "x2") {
					setResult((prev) =>
						(
							operations[operation] as (a: number) => number
						)(prev)
					);
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
			},

		onEqualButtonClick:
			(operation: OperationType) => () => {
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
			},

		onResetButtonClick: () => {
			setFirstNumber(0);
			setSecondNumber(0);
			// FIXME: setOperation par?
			setOperation(undefined);
			setResult(0);
		},

		onDeleteButtonClick: () => {
			if (!result) return;

			if (firstNumber && secondNumber) {
				setFirstNumber(0);
				setSecondNumber(0);
				// FIXME: wrong parameter?
				setOperation(undefined);
				return;
			}

			setResult((prev) => {
				if (prev.toString().length === 1) return (prev = 0);
				// FIXME: обернул в Number
				return Number(prev.toString().slice(0, -1));
			});
		},
	};

	const handleNumberButtonClick = (value: number) => () => {
		setResult((prev) => {
			if (prev === 0) return (prev += value);
			return Number(prev.toString() + value);
		});
	};

	const handleRepeatButtonClick = () => {
		if (operation !== undefined) {
			setFirstNumber((prev) => {
				return operations[operation](prev, result);
			});
		}
	};

	const handleOperationButtonClick =
		(operation: OperationType) => () => {
			if (operation === "x2") {
				setResult((prev) =>
					(operations[operation] as (a: number) => number)(
						prev
					)
				);
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
		(operation: OperationType) => () => {
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
		setOperation(undefined);
		setResult(0);
	};

	const handleDeleteButtonClick = () => {
		if (!result) return;

		if (firstNumber && secondNumber) {
			setFirstNumber(0);
			setSecondNumber(0);
			// FIXME: wrong parameter?
			setOperation(undefined);
			return;
		}

		setResult((prev) => {
			if (prev.toString().length === 1) return (prev = 0);
			// FIXME: обернул в Number
			return Number(prev.toString().slice(0, -1));
		});
	};

	return (
		<div className={styles.calculator}>
			<ResultField
				result={result}
				preResult={preResult}
			/>
			<div className={styles.actionsContainer}>
				<ButtonsContainer
					onButtonClick={callbacks.onNumberButtonClick}
					onEqualButtonClick={callbacks.onEqualButtonClick}
					operation={operation}
					onOperationButtonClick={
						callbacks.onOperationButtonClick
					}
					onDeleteButtonClick={
						callbacks.onDeleteButtonClick
					}
					onResetButtonClick={callbacks.onResetButtonClick}
				/>
			</div>
		</div>
	);
};

export default Calculator;

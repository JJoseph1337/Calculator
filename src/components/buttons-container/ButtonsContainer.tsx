import styles from "./ButtonContainer.module.css";
import AdditionIcon from "../../ui/icons/AdditionIcon";
import DivisionIcon from "../../ui/icons/DivisionIcon";
import EqualIcon from "../../ui/icons/EqualIcon";
import MultiplicationIcon from "../../ui/icons/MultiplicationIcon";
import SubtractionIcon from "../../ui/icons/SubtractionIcon";
import Button from "../button/Button";
import { OperationType } from "../calculator/Calculator";

interface ButtonsContainerProps {
	onNumberButtonClick: (number: number) => () => void;
	onEqualButtonClick: (
		operation: OperationType
	) => () => void;
	operation: OperationType | undefined;
	onOperationButtonClick: (
		operation: OperationType
	) => () => void;
	onDeleteButtonClick: () => void;
	onResetButtonClick: () => void;
}

const ButtonsContainer = ({
	onNumberButtonClick,
	onEqualButtonClick,
	operation,
	onOperationButtonClick,
	onDeleteButtonClick,
	onResetButtonClick,
}: ButtonsContainerProps) => {
	return (
		<div className={styles.calculatorGrid}>
			<Button
				style={{
					color: "grey",
				}}
				onClick={onResetButtonClick}
			>
				C
			</Button>
			<Button
				style={{
					color: "grey",
					paddingLeft: "12px",
					paddingBottom: "9px",
				}}
				onClick={onOperationButtonClick("x2")}
			>
				x²
			</Button>
			<Button
				style={{
					color: "grey",
				}}
				onClick={onDeleteButtonClick}
			>
				del
			</Button>
			<Button onClick={onOperationButtonClick("/")}>
				<DivisionIcon />
			</Button>
			<Button onClick={onNumberButtonClick(7)}>7</Button>
			<Button onClick={onNumberButtonClick(8)}>8</Button>
			<Button onClick={onNumberButtonClick(9)}>9</Button>
			<Button onClick={onOperationButtonClick("*")}>
				<MultiplicationIcon />
			</Button>
			<Button onClick={onNumberButtonClick(4)}>4</Button>
			<Button onClick={onNumberButtonClick(5)}>5</Button>
			<Button onClick={onNumberButtonClick(6)}>6</Button>
			<Button onClick={onOperationButtonClick("-")}>
				<SubtractionIcon />
			</Button>
			<Button onClick={onNumberButtonClick(1)}>1</Button>
			<Button onClick={onNumberButtonClick(2)}>2</Button>
			<Button onClick={onNumberButtonClick(3)}>3</Button>
			<Button onClick={onOperationButtonClick("+")}>
				<AdditionIcon />
			</Button>
			<Button onClick={onNumberButtonClick(0)}>0</Button>
			{/* <Button onClick={onNumberButtonClick(".")}>.</Button> */}
			<Button
				style={{
					color: "#f0f0f3",
					background: "#2dd3c5",
					gridColumn: "span 2",
				}}
				onClick={onEqualButtonClick(operation as OperationType)}
			>
				<EqualIcon />
			</Button>
		</div>
	);
};

export default ButtonsContainer;

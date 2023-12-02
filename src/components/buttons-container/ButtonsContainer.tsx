import styles from "./ButtonContainer.module.css";
import AdditionIcon from "../../ui/icons/AdditionIcon";
import DivisionIcon from "../../ui/icons/DivisionIcon";
import EqualIcon from "../../ui/icons/EqualIcon";
import MultiplicationIcon from "../../ui/icons/MultiplicationIcon";
import SubtractionIcon from "../../ui/icons/SubtractionIcon";
import Button from "../button/Button";

const ButtonsContainer = ({
	onButtonClick,
	onEqualButtonClick,
	operation,
	onOperationButtonClick,
	onDeleteButtonClick,
	onResetButtonClick,
}) => {
	return (
		<div className={styles.calculatorGrid}>
			<Button
				grey
				onClick={onResetButtonClick}
			>
				C
			</Button>
			<Button
				grey
				squareButton
				onClick={onOperationButtonClick("x2")}
			>
				x²
			</Button>
			<Button
				grey
				delButton
				onClick={onDeleteButtonClick}
			>
				del
			</Button>
			<Button onClick={onOperationButtonClick("/")}>
				<DivisionIcon />
			</Button>
			<Button onClick={onButtonClick(7)}>7</Button>
			<Button onClick={onButtonClick(8)}>8</Button>
			<Button onClick={onButtonClick(9)}>9</Button>
			<Button onClick={onOperationButtonClick("*")}>
				<MultiplicationIcon />
			</Button>
			<Button onClick={onButtonClick(4)}>4</Button>
			<Button onClick={onButtonClick(5)}>5</Button>
			<Button onClick={onButtonClick(6)}>6</Button>
			<Button onClick={onOperationButtonClick("-")}>
				<SubtractionIcon />
			</Button>
			<Button onClick={onButtonClick(1)}>1</Button>
			<Button onClick={onButtonClick(2)}>2</Button>
			<Button onClick={onButtonClick(3)}>3</Button>
			<Button onClick={onOperationButtonClick("+")}>
				<AdditionIcon />
			</Button>
			<Button
				zeroButton
				spanTwo
				onClick={onButtonClick(0)}
			>
				0
			</Button>
			<Button onClick={onButtonClick(".")}>.</Button>
			<Button
				equalButton
				onClick={onEqualButtonClick(operation)}
			>
				<EqualIcon />
			</Button>
		</div>
	);
};

export default ButtonsContainer;

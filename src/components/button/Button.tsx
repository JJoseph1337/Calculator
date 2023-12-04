import styles from "./Button.module.css";
interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	style?: React.CSSProperties;
}

// FIXME: медиа стили перестали работать
const Button = ({
	children,
	onClick,
	style,
}: ButtonProps) => {
	return (
		<button
			style={style}
			className={styles.button}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

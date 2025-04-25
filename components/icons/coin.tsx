export function CoinIcon(props: React.HTMLAttributes<HTMLImageElement>) {
	const { className, ...rest } = props;

	return (
		<img
			{...rest}
			src="assets/coin.png"
			className={`size-8 ${className}`}
			alt="a coin"
		/>
	);
}

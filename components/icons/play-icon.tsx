import { SVGProps } from "react";

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			{...props}
		>
			<g filter="url(#filter0_d_32_439)">
				<path
					d="M24.9765 10.9113C27.4521 12.2576 27.4521 15.7424 24.9765 17.0886L10.0292 25.2169C7.62325 26.5253 4.6665 24.8223 4.6665 22.1283V5.8717C4.6665 3.17761 7.62325 1.47467 10.0292 2.78304L24.9765 10.9113Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_32_439"
					x="0"
					y="0"
					width="28"
					height="30"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_32_439"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_32_439"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}

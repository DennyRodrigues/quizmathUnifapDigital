"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useMotionValue, motion } from "motion/react";

export function StarRating({
	rating,
}: {
	rating: number;
}) {
	const opacity = useMotionValue(1);

	const { rive, RiveComponent } = useRive({
		src: "assets/animation/rating_animation.riv",
		stateMachines: "rating",
		autoplay: true,
		onLoad: () => {
			opacity.set(0);
		},
	});

	const ratingInput = useStateMachineInput(rive, "rating", "rating", rating);

	return (
		<div className="grid h-20 w-full grid-cols-1 place-items-center">
			<motion.img
				style={{
					opacity,
					visibility: opacity,
				}}
				src="assets/animation/idle.png"
				className="col-start-1 row-start-1 h-20 w-auto "
				alt="star rating"
			/>

			<RiveComponent
				style={{ height: "40px" }}
				className="col-start-1 row-start-1 h-20 w-full"
			/>
		</div>
	);
}

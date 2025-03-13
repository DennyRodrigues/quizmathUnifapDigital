import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { PlayIcon } from "./icons/play-icon";
import styles from "./play-button.module.css";

export function PlayButton({
	text,
	...props
}: {
	text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<Link className="flex" href={"/play"}>
			<button className={`${styles.pushable} ${props.className} flex-1`}>
				<span className={styles.shadow} />
				<span className={styles.edge} />
				<div
					className={cn([
						styles.front,
						styles["text-play"],
						"flex items-center justify-center gap-2 font-nunito text-2xltext-white uppercase leading-7",
					])}
				>
					<PlayIcon />
					{text}
				</div>
			</button>
		</Link>
	);
}

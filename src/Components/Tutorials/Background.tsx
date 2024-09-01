"use client";

import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import { motion, easeIn } from "framer-motion";

interface Props {
	title: string;
	description: ReactNode;
	image: string;
	id: string;
	arrowImage?: string;
	scaleImage?: boolean;
	scaleImageNumber?: number;
	arrowVisible?: boolean;
	arrowTop?: string;
	arrowLeft?: string;
}

export default function Tutorial(props: Props) {
	// Removing whitespace from title
	const titleTrim = props.title.trim().split(/\s+/);
	const titleToID = titleTrim.join("-").toLowerCase();

	// console.log(titleToID);

	// Splitting title into words and getting the last word
	const titleWords = props.title.split(" ");
	const lastWord = titleWords.pop();

	// Animations

	const heading = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const leading = {
		hidden: {
			scaleX: 0,
		},
		visible: {
			scaleX: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const desc = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.7,
				duration: 0.5,
			},
		},
	};

	const imgBox = {
		hidden: {
			opacity: 0,
			y: 100,
			easeIn,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.9,
				duration: 0.5,
			},
		},
	};

	const img = {
		hidden: {
			scale: 0,
			y: 0,
			easeIn,
		},

		visible: {
			scale: props.scaleImage ? props.scaleImageNumber : 0.8,
			y: props.scaleImage ? 300 : 0,
			transition: {
				delay: 1.1,
				duration: 0.5,
				type: "spring",
				yoyo: Infinity,
			},
		},
	};

	return (
		<div
			id={titleToID}
			className={cn(
				"min-h-screen flex justify-center bg-background",
				"overflow-clip"
			)}
		>
			<div className="absolute w-[513px] bg-[rgba(0,0,0,0.2)] right-0 hidden md:flex z-[1]"></div>
			<div
				className={cn(
					"grid md:grid-cols-2 grid-cols-1 content-center items-center justify-between md:gap-32 gap-0 w-full mx-16 md:mx-32"
				)}
			>
				<div className="flex flex-col justify-start gap-5 my-8">
					<motion.h1
						initial="hidden"
						whileInView="visible"
						variants={heading}
						className={cn("h1")}
						
					>
						{titleWords.join(" ")}{" "}
						<span className={cn("h1", "last-word")} >
							{lastWord}
						</span>
					</motion.h1>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={leading}
						className=""
					>
						<div className="w-20 h-[0.15rem] bg-primary"></div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={desc}
						className="font-normal"
					>
						{props.description}
					</motion.div>
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={imgBox}
					className="z-10"
				>
					<div className="relative">
						{props.arrowVisible ? (
							<motion.img
								initial="hidden"
								whileInView="visible"
								variants={imgBox}
								className={cn(
									"absolute z-50 hidden md:flex",
									props.arrowTop,
									props.arrowLeft,
								)}
								src={props.arrowImage}
								alt="Arrow"
								width={400}
								height={1079}
							/>
						) : null}
						<motion.img
							initial="hidden"
							animate="visible"
							variants={img}
							className="flex items-center justify-center ml-0 z-10"
							src={props.image}
							alt={props.title}
							width={400}
							height={1079}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

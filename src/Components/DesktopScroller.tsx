"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Slider() {
	const { scrollYProgress } = useScroll();
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	  });

    const background = useTransform(scrollYProgress, [0, 1], ["#5AA5FD", "#84F15E"]);
	return (
		<div className="h-full flex items-center justify-center">
			<div className="fixed md:right-[150px] right-[100px] top-[160px] h-1/2 w-2 bg-[#424242] rounded transform origin-top-left z-20 overflow-clip"></div>
			<div className="flex items-center justify-center">
				<motion.div
					style={{
						scaleY,
						background,
					}}
					className="fixed md:right-[150px] right-[100px] top-[160px] h-1/2 w-2 bg-primary rounded transform origin-top-left z-30"
				></motion.div>
			</div>
		</div>
	);
}
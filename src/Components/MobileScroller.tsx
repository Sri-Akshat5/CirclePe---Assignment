"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Slider() {
	const { scrollYProgress } = useScroll();

    const background = useTransform(scrollYProgress, [0, 1], ["#5AA5FD", "#84F15E"]);
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	  });
	return (
		<div className="h-full flex items-center justify-center overflow-x-clip">
			<div className="fixed right-0 top-0 left-0 w-screen h-2 bg-[#424242] transform origin-top-left z-20"></div>
			<div className="flex items-center justify-center">
				<motion.div
					style={{
						scaleX,
						background,
					}}
					className="fixed right-0 top-0 left-0 w-screen h-2 bg-primary transform origin-top-left z-30"
				></motion.div>
			</div>
		</div>
	);
}
'use client';
import YellowBullet from '@/Assets/YellowBullet.svg';
import WhiteBullet from '@/Assets/WhiteBullet.svg';
import { cn } from '@/libs/utils';

interface DescriptionProps {
	text: string;
	textArray?: string[];
	active: boolean;
	activeIndex?: number;
	bulletPoints?: string[];
}

export const SingleLine = ({ text, active }: DescriptionProps) => {
	return (
		<p className="flex items-center justify-start gap-5">
			{active ? (
				<span>
					<YellowBullet />
				</span>
			) : null}
			<span
				className={cn(
					'text-[#EEEEEE]',
					active && 'text-active font-medium',
				)}
			>
				{text}
			</span>
		</p>
	);
};

export const TwoLines = ({ textArray, activeIndex }: DescriptionProps) => {
	return (
		<div>
			{textArray?.map((text, index) => (
				<p
					key={index}
					className={cn(
						'flex items-center justify-start gap-5 text-[#939393]',
						activeIndex === index && 'text-active font-medium',
					)}
				>
					<span>
						{activeIndex === index ? (
							<YellowBullet />
						) : (
							<WhiteBullet />
						)}
					</span>
					<span
						className={cn(
							activeIndex === index && 'text-active font-medium',
						)}
					>
						{text}
					</span>
				</p>
			))}
		</div>
	);
};

export const BulletPoints = ({ text, bulletPoints }: DescriptionProps) => {
	return (
		<div>
			<p className="text-active flex items-center justify-start gap-5">
				<span>
					<YellowBullet />
				</span>
				<span className="font-medium">{text}</span>
			</p>
			<ul className="list-disc list-inside leading-7 ml-7">
				{bulletPoints?.map((bullet, index) => (
					<li key={index} className="text-[#EEEEEE]">
						{bullet}
					</li>
				))}
			</ul>
		</div>
	);
};

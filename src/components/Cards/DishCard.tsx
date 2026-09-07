import { cormorantInfant } from '@/fonts';
import Image from 'next/image';
import type { ReactNode } from "react";

export default function DishCard({
	icon,
	title,
	paragraph,
	price,
}: {
	icon: ReactNode;
	title: string;
	paragraph: string;
	price: number;
}) {
	return (
		<div className="container__cards container__dish-card">
			{icon}
			<div className="column col__h__start">
				<div className="container container__card__dishes">
					<h5 className={cormorantInfant.className}>{title}</h5>
					<p className="container row-h-end">
						<Image
							className="img__dishcard"
							src="/icons/dotted-line.svg"
							alt=""
							width={332}
							height={8}
							priority
						/>
					</p>
					<h6 className={cormorantInfant.className}>${`${price}`}</h6>
				</div>
				<div className="container__cards">{paragraph}</div>
			</div>
		</div>
	);
}

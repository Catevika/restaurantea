import { cormorantInfant } from "@/fonts";

export default function Cart() {
	return (
		<div className="container__cart col__h__start">
			<h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
				Cart
			</h1>
			<div className="container__color__bg">
				<div>Start adding your favorite dishes</div>
				<a href="/menu" className="button">
					Browse our Card
				</a>
			</div>
		</div>
	);
}

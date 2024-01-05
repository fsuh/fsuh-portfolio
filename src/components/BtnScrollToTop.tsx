import { useEffect, useState } from "react";
import BackToTopImage from "../assets/backToTop.png";
const BtnScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
		// if(window.scrollY > 300) {
		//     setIsVisible(true)
		// } else {
		//     setIsVisible(false)
		// }
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	return (
		<div
			className=" hidden lg:align-element lg:fixed lg:bottom-10 lg:right-80 lg:z-50 lg:tooltip"
			data-tip="back_to_top"
		>
			{isVisible && (
				<button
					type="button"
					onClick={scrollToTop}
				>
					<img
						src={BackToTopImage}
						className="w-20 h-auto"
					/>
				</button>
			)}
		</div>
	);
};
export default BtnScrollToTop;

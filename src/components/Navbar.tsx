import logo from "../assets/fsuhLogo.png";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const themes = {
	light: "winter",
	dark: "night",
};
const getThemeFromLocalStorage = () => {
	return localStorage.getItem("theme") || themes.light;
};
const Navbar = () => {
	const [theme, setTheme] = useState(getThemeFromLocalStorage());
	const handleTheme = () => {
		const { light, dark } = themes;
		const newTheme = theme === light ? dark : light;
		setTheme(newTheme);
	};
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<nav className="bg-base-100">
			<div className="navbar align-element">
				<div className="navbar-start">
					{/* logo */}
					<a
						href="/"
						className="hidden lg:flex"
					>
						<img
							src={logo}
							alt="logo"
							className="w-16 h-auto hidden lg:flex"
						/>
					</a>
					{/* DropDown */}
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<FaBarsStaggered className="h-auto w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal dropdown-content">
						<NavLinks />
					</ul>
				</div>
				<div className="navbar-end">
					<label className="swap swap-rotate">
						<input
							type="checkbox"
							onChange={handleTheme}
						/>
						<BsSunFill className="swap-off fill-current w-4 h-auto" />
						<BsMoonFill className="swap-on fill-current w-4 h-auto" />
					</label>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

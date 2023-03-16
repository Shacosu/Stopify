import { Link } from "react-router-dom";
import { IconUserCircle, IconBookmark, IconMenu2, IconCash } from '@tabler/icons-react';
import { useGetMetroDataQuery } from "../services/getDataXor";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
	const { data, error, isLoading } = useGetMetroDataQuery();
	return (
		<header className={`bg-slate-800 min-h-20  w-full ${isLoading ? "hidden" : "block"}`}>
			<nav className="w-full bg-yellow-500 h-10 flex justify-around items-center">
				<div>
					<Link to="/" className=" font-bold">Stopify</Link>
				</div>
				<p className=" flex items-center font-bold text-red-500">Lineas de Metro </p>
				<div className="hidden items-center gap-2 md:flex">
					<Link to="/" className="flex gap-x-1 bg-purple-600 text-white font-bold p-1 px-2 rounded">
						<IconUserCircle />
						<span>Login</span>
					</Link>
					<Link to="/" className="bg-green-500 p-1 text-white rounded">
						<IconBookmark />
					</Link>
					<Link to="/balance" className="bg-green-500 p-1 text-white rounded">
						<IconCash />
					</Link>
				</div>
				<div className="md:hidden flex items-center">
					<BurgerMenu />
				</div>
			</nav>
			<div className=" grid grid-cols-7 md:grid-cols-7 gap-4 p-4  place-items-center">
			{data?.lines.map(({ id, name, issues, stations_closed_by_schedule }, idx) => (
				<div className={`text-white text-sm font-bold rounded-lg col-span-1 md:col-span-1 md:w-3/6  p-1 px-2 text-center  ${issues ? "bg-yellow-500" : "bg-green-400"}`} key={idx}>
					<img
						src="https://www.red.cl/wp-content/themes/red/images/iconos/icono-metro-logo.png"
						alt="imgMetro"
						className="w-6 bg-red-500 rounded p-1 inline mr-2"
					/>
					{id}
				</div>
			))}
			</div>
		</header>
	);
}

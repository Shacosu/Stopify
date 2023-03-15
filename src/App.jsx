import React, { useState } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import { useGetStopIdQuery, useGetMetroDataQuery } from "./services/getDataXor";

function App() {
	const dispatch = useDispatch();
	const [busId, setBusId] = useState("PI1396");
	const { data, error, isLoading } = useGetStopIdQuery(busId);
	const {
		data: metroData,
		error: metroError,
		isLoading: metroLoading,
	} = useGetMetroDataQuery();
	console.log(metroData);
	const updateQuery = (e) => {
		if (e.target.value !== "") {
			setBusId(e.target?.value);
		}
	};
	const debounceOnChange = debounce(updateQuery, 500);
	return (
		<>
			<header className={`bg-slate-800 min-h-20 grid grid-cols-12 md:grid-cols-10 gap-4 p-4 md:place-items-center w-full ${metroLoading ? "hidden" : "block"}` }>
				{metroData?.lines.map(({ id, name, issues }) => (
				<div className={` text-white font-bold rounded-lg col-span-6 md:col-span-2 flex gap-1  p-2 ${issues ? "bg-yellow-500"  : "bg-green-400"}`}>
				<img
					src="https://www.red.cl/wp-content/themes/red/images/iconos/icono-metro-logo.png"
					alt="imgMetro"
					className="w-6 bg-red-500 rounded"
				/>
				{id} - {name}
			</div>
				))}
			</header>
			<div className="container mx-auto p-10">
				<h3>{data?.name}</h3>
				{error && (
					<p className="bg-red-500 text-white rounded-lg p-2 mx-auto text-center font-bold my-2">
						Se ha producido un error, favor repetir numero de paradero.
					</p>
				)}
				{isLoading & !data ? (
					<div className=" w-full h-[calc(100vh-24rem)]  flex justify-center ">
						<div className="flex flex-col w-full  items-center">
							<span className="font-black text-xl mb-4">Stopify</span>
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-slate-500 to-slate-900 animate-spin">
								<div className="h-9 w-9 rounded-full bg-gray-200"></div>
							</div>
						</div>
					</div>
				) : (
					<div>
						<h2 className="text-2xl">
							Paradero ingresado: <span className="font-bold">{data?.id}</span>
						</h2>
						<input
							type="text"
							placeholder="ID del paradero"
							className="border p-2 w-full mt-2"
							onChange={debounceOnChange}
						/>
						<div className="md:w-1/6 min-h-[12rem] bg-white shadow-lg rounded p-4 border mt-2 text-sm">
							{data?.services.map(({ id, status_description, buses }, idx) => (
								<div className="my-2 border p-2" key={idx}>
									<p className="font-bold text-base">
										<span className="border-b border-black text-yellow-600">{id}</span> - {status_description}
									</p>
									{buses.map(
										({ id, max_arrival_time, meters_distance, min_arrival_time }, idx) => (
											<p className="italic" key={idx}>
												{id} - de {min_arrival_time} a {max_arrival_time} min.{" "}
												<span className="font-black">
													{" "}
													{meters_distance > 1000
														? meters_distance.toString().substring(0, 1) + " Kilómetro/s"
														: meters_distance + " Metro/s"}
												</span>
											</p>
										)
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default App;

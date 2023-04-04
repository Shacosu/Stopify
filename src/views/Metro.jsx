import React, { useState, useEffect } from 'react';
import debounce from "lodash.debounce";
import { useGetStopIdQuery } from "../services/getDataXor";
import Loading from "../components/Loading";

export default function Metro() {
    const [busId, setBusId] = useState("PI1396");
    // const [count, setCount] = useState(15);
    const { data, error, isLoading, refetch } = useGetStopIdQuery(busId);
    const updateQuery = (e) => {
		if (e.target.value !== "") {
			setBusId(e.target?.value);
		}
	};
    const debounceOnChange = debounce(updateQuery, 300);

    useEffect(()=> {
		refetch();
		const updateInterval = setInterval(() => {
			refetch();
		}, 15000)
        return () => clearInterval(updateInterval);
    }, [])

	console.log(data);
  return (
<div className="container mx-auto p-10">
				<h3>{data?.name}</h3>
				{error && (
					<p className="bg-red-500 text-white rounded-lg p-2 mx-auto text-center font-bold my-2">
						El paradero ingresado no existe o ha ocurrido un error!
					</p>
				)}
				{isLoading & !data ? (
					<Loading />
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
                        
						<div className=" min-h-[12rem] bg-white shadow-lg rounded p-4 border mt-2 text-sm">
                            
							{/* {[...data?.services].sort((a, b) => a.id > b.id ? 1 : -1).map(({ id, status_description, buses }, idx) => (
								<div className="my-2 border p-2" key={idx}>
									<p className="font-bold text-base">
										<span className="border-b border-black text-yellow-600">{id}</span> -{" "}
										{status_description}
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
							))} */}
                        <p>La información se actualiza cada 15 segundo!</p>
						</div>
					</div>
				)}
			</div>
  )
}

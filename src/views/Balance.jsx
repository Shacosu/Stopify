import React, {useState} from "react";
import Loading from "../components/Loading";
import { useLazyGetBalanceBipQuery } from "../services/getBalance";

// Bip: 21045688

export default function Balance() {
	const [code, setCode] = useState("")
	const [trigger, { data, isFetching, error }] = useLazyGetBalanceBipQuery();
	async function handleSubmit(e) {
		e.preventDefault();
		if (isNaN(code)) return alert("Ingrese un numero de tarjeta valido.");
		trigger(code);
	}
	if (isFetching) return <Loading />
	
	return (
		<div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
            <input
				type="text"
				placeholder="Código de tarjeta BIP, TNE, etc..."
				className="border p-2 w-full mt-2"
                onChange={({ target }) => setCode(target.value)}
			/>
            <button className="w-full p-2 bg-indigo-500 text-white font bold mt-2">Revisar Saldo</button>
            </form>
			{ !data ? (
				<h1>Ingresa un numero de tarjeta BIP o TNE para buscar.</h1>
			) : (
				<div className="text-2xl text-center mt-10 bg-white p-2">
					<p>Saldo {data.balance}</p>
					<p>Fecha: {data.date}</p>
				</div>
			) }
		</div>
	);
}

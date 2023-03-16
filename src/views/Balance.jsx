import React, {useState} from "react";
import { useGetBalanceBipQuery } from "../services/getDataXor";

export default function Balance() {
    const [code, setCode] = useState("")
    const { data, error, isLoading } = useGetBalanceBipQuery("21045688");
	return (
		<div className="container mx-auto p-4">
            <form>
            <input
				type="text"
				placeholder="Código de tarjeta BIP, TNE, etc..."
				className="border p-2 w-full mt-2"
                onChange={({ target }) => setCode(target.value)}
			/>
            <button className="w-full p-2 bg-indigo-500 text-white font bold mt-2">Revisar Saldo</button>
            </form>
		</div>
	);
}

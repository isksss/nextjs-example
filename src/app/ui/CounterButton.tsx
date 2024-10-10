"use client";

import React, { useState } from "react";

export default function CounterButton() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
				className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
				onClick={() => setCount(count + 1)}
			>
				カウント: {count}
			</button>
		</>
	);
}

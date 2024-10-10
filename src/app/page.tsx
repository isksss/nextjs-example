import Image from "next/image";
import CounterButton from "./ui/CounterButton";
export default function Home() {
	return (
		<>
			<div>
				<h2>カウンター</h2>

				<div>
					<CounterButton />
				</div>
			</div>
		</>
	);
}

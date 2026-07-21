type Card = {
	name: string;
	location: string;
	img: string;
	startDate: string;
	endDate: string;
	jobdesk: string[];
};

type CardProps = {
	card: Card;
	isOpen: boolean;
	onToggle: () => void;
};

export default function Card({ card, isOpen, onToggle }: CardProps) {
	 return (
			<div className="w-full max-w-5xl mb-4 bg-white/20 backdrop-blur-md shadow-lg">
				<button
					onClick={onToggle}
					className={`w-full py-2 text-center font-bold text-lg cursor-pointer ${isOpen? "border-b border-gray-300" : "border-0"}`}>
					{card.location} {isOpen ? "▲" : "▼"}
				</button>

				{isOpen && (
					<div className="flex gap-5 p-4 rounded-lg ">
						<img
							className="max-w-[40%]"
							src={card.img}
							alt={card.name}
						/>

						<div>
							<h2 className="text-2xl font-bold">{card.name}</h2>
							<span>
								{card.startDate} - {card.endDate}
							</span>

							<ul className="list-disc pl-5 mt-4">
								{card.jobdesk.map((job, index) => (
									<li key={index}>{job}</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		);
}

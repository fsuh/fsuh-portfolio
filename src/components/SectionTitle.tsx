const SectionTitle = ({ text }: { text: string }) => {
	return (
		<div className="flex flex-col w-full">
			<h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
			<div className="divider"></div>
		</div>
	);
};
export default SectionTitle;

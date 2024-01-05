const SkillsCard = ({ icon, title }: { icon: JSX.Element; title: string }) => {
	return (
		<article>
			<span>{icon}</span>
			<h4 className="mt-6 font-bold">{title}</h4>
		</article>
	);
};
export default SkillsCard;

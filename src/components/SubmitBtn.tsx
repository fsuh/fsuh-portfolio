const SubmitBtn = ({ text }: { text: string }) => {
	return (
		<button
			type="submit"
			className="btn btn-primary btn-block"
		>
			{text}
		</button>
	);
};
export default SubmitBtn;

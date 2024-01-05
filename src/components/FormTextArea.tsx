interface ITextAreaVariables {
	name: string;
	placeholder: string;
	rows?: number;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const FormTextArea: React.FC<ITextAreaVariables> = ({
	name,
	placeholder,
	rows,
	value,
	onChange,
}) => {
	return (
		<div className="form-control">
			<textarea
				name={name}
				placeholder={placeholder}
				rows={rows}
				value={value}
				onChange={onChange}
				required
				className={`textarea textarea-bordered bg-transparent w-full text-neutral-content`}
			/>
		</div>
	);
};
export default FormTextArea;

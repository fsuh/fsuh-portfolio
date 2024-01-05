export interface InputVariables {
	name: string;
	type: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<InputVariables> = ({
	name,
	type,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div className="form-control">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required
				className={`input input-bordered bg-transparent w-full text-neutral-content`}
			/>
		</div>
	);
};
export default FormInput;

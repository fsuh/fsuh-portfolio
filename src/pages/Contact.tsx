import {
	FormInput,
	FormTextArea,
	SubmitBtn,
	SectionTitle,
} from "../components";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		subject: "",
		message: "",
	});
	const form = useRef<HTMLFormElement | null>(null);

	const handleSendEmail = (e: FormEvent) => {
		e.preventDefault();
		if (form.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					form.current,
					import.meta.env.VITE_PUBLIC_KEY
				)
				.then(
					(result) => {
						// console.log(result.text);
						toast.success(`${result.text}!, mail was successfully sent`);
						setFormData({
							user_name: "",
							user_email: "",
							subject: "",
							message: "",
						});
					},
					(error) => {
						// console.log(error.text);
						toast.error(`Oh!, there was an error - ${error.text}`);
					}
				);
		}
	};
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	return (
		<section
			id="contact"
			className="bg-primary-content"
		>
			<div className="align-element py-20">
				<SectionTitle text="contact me" />
				<div className="flex items-center justify-center">
					<form
						// method="POST"
						ref={form}
						onSubmit={handleSendEmail}
						className="card  w-96 lg:w-3/5 p-8 shadow-lg flex flex-col gap-y-4 bg-neutral"
					>
						<div className="chat chat-end">
							<p className="chat-bubble chat-bubble-info">
								I am interested in freelance opportunities especially ambitious
								or large projects. However, if you have other request or
								questions, don't hesitate to contact me using this form
							</p>
						</div>

						<FormInput
							type="text"
							name="user_name"
							placeholder="Enter your name"
							value={formData.user_name}
							onChange={handleInputChange}
						/>
						<FormInput
							type="email"
							name="user_email"
							placeholder="Enter your email"
							value={formData.user_email}
							onChange={handleInputChange}
						/>
						<FormInput
							type="text"
							name="subject"
							placeholder="Message Subject"
							value={formData.subject}
							onChange={handleInputChange}
						/>
						<FormTextArea
							name="message"
							placeholder="Enter your message"
							rows={4}
							value={formData.message}
							onChange={handleInputChange}
						/>
						<div className="px-10 lg:px-40">
							<SubmitBtn text="send" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Contact;

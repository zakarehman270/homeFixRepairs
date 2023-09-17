import { useState } from "react";
import { Button } from "react-bootstrap";

const ContactUs = () => {
	const [Values, setValues] = useState({
		name: "",
		email: "",
		number: "",
		service: "",
		instruction: "",
		suggestion: "",
	});

	const [localErrorMessage, setLocalErrorMessage] = useState({
		name: false,
		email: false,
		number: false,
		service: false,
		instruction: false,
		suggestion: false,
	});
	function resetValidation() {
		setLocalErrorMessage({
			name: false,
			email: false,
			number: false,
			service: false,
			instruction: false,
			suggestion: false,
		});
	}
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		resetValidation();
		if (
			type === "text" ||
			type === "email" ||
			type === "textarea" ||
			type === "select-one" ||
			type === "number"
		) {
			setValues((prevValues) => ({
				...prevValues,
				[name]: value,
			}));
		} else if (type === "checkbox") {
			// For checkbox fields
			setValues((prevValues) => ({
				...prevValues,
				[name]: checked,
			}));
		}
	};
	const onSubmit = (e) => {
		e.preventDefault();
		let flag = true;
		dispatch(ResetErrorMessage());
		// Validate the form fields before submission
		if (!Values.email) {
			setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
			flag = false;
		}
		if (!Values.name) {
			setLocalErrorMessage((prevState) => ({ ...prevState, name: true }));
			flag = false;
		}
		if (!Values.service) {
			setLocalErrorMessage((prevState) => ({ ...prevState, service: true }));
			flag = false;
		}
		if (!Values.instruction) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				instruction: true,
			}));
			flag = false;
		}
		if (!Values.service) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				service: true,
			}));
			flag = false;
		}
		if (flag) {
			/// for Added ///
			Values.weekend_days = weekendDays;
			Values.emergency_phone = EmergencyPhoneNumber;
			Values.booking_phone = BookingPhoneNumber;
			dispatch(handlerCreate(Values));
		}
	};
	return (
		<div className="my-5">
			<div className="container">
				<div className="d-flex gap-1 align-items-center justify-content-center">
					<h2 className="headingColor">Contact Us</h2>
				</div>
				<div>
					<h2>Feel Free To Contact Us</h2>
					<p className="ServiceBoxDescription TextHolderContactUS">
						Let us help you become even greater at what you do. Fill out the
						following form and we will get back to you in the next 24 hours.
					</p>
					<div className="row mt-3">
						<div className="col-md-7">
							<form className="row g-3" onSubmit={onSubmit}>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What's your name?
									</label>
									<input
										value={Values.name}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.name ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="text"
										name="name"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.name && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What's your email address?
									</label>
									<input
										value={Values.email}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.email ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="email"
										name="email"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.email && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What's your phone number?
									</label>
									<input
										value={Values.number}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.number ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="text"
										name="number"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.number && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What's services are you looking for?
									</label>
									<input
										value={Values.service}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.service ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="text"
										name="service"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.service && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What's your Instructions?
									</label>
									<input
										value={Values.instruction}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.instruction ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="text"
										name="instruction"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.instruction && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div className="col-md-12">
									<label className="form-label LabelFormContactUs">
										What you Suggest?
									</label>
									<input
										value={Values.suggestion}
										onChange={handleChange}
										className={`form-control inputContactUs ${
											localErrorMessage.suggestion ? "inputFieldRedColor" : ""
										}`}
										placeholder="First Name*"
										type="text"
										name="suggestion"
										aria-autocomplete="list"
										autoCorrect="off"
									/>
									{localErrorMessage.suggestion && (
										<Alert variant="danger">This field is required</Alert>
									)}
								</div>
								<div>
									<Button className="button">Submit</Button>
								</div>
							</form>
						</div>
						<div className="col-md-4">
							<h4>CALL US</h4>
							<label htmlFor="callus" className="d-bloc ServiceBoxDescription">
								+971558504862
							</label>
							<label htmlFor="callus" className="d-block ServiceBoxDescription">
								+971558504862
							</label>
							<h4 className="mt-3">Email</h4>
							<label htmlFor="callus" className="d-bloc ServiceBoxDescription">
								babalqatya4@gmail.com
							</label>
							<h4 className="mt-3">ADDRESS</h4>
							<label htmlFor="callus" className="d-bloc ServiceBoxDescription">
								Office 204, Albraha area, Jessco market building Dubai, UAE
							</label>
							<div className="mt-3 w-100">
								<img src="/assets/icons/map.svg" alt="map" className="w-100" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

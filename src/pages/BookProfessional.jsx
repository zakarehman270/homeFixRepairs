import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomStyledCalendar from "../components/CustomStyledCalendar/CustomStyledCalendar";
const BookProfessional = () => {
	const [Values, setValues] = useState({
		hotel_code: "",
		hotel_name: "",
		star_rating: "",
		property_type: "",
		hotel_email: "",
		price_type: "",
		hotel_currency: "",
		hotel_description: "",
		year_built: "",
		hotel_address: "",
		hotel_location: "",
		hotel_logi: "",
		hotel_lati: "",
		booking_email: "",
		booking_phone: "",
		emergency_phone: "",
		room_type_name: "",
		status: 1,
		destination: "",
		weekend_days: [],
		is_offline_booking: "",
	});

	const [localErrorMessage, setLocalErrorMessage] = useState({
		hotel_code: false,
		hotel_name: false,
		star_rating: false,
		property_type: false,
		hotel_email: false,
		price_type: false,
		hotel_currency: false,
		hotel_description: false,
		year_built: false,
		hotel_address: false,
		hotel_location: false,
		hotel_logi: false,
		hotel_lati: false,
		booking_email: false,
		is_offline_booking: false,
		booking_phone: false,
		emergency_phone: false,
		destination: false,
	});
	function resetValidation() {
		setLocalErrorMessage({
			hotel_code: false,
			hotel_name: false,
			star_rating: false,
			property_type: false,
			hotel_email: false,
			price_type: false,
			hotel_currency: false,
			weekend_days: false,
			hotel_description: false,
			year_built: false,
			hotel_address: false,
			hotel_location: false,
			hotel_logi: false,
			hotel_lati: false,
			booking_email: false,
			is_offline_booking: false,
			booking_phone: false,
			emergency_phone: false,
			destination: false,
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
		// Validate the form fields before submission
		if (!Values.hotel_name) {
			setLocalErrorMessage((prevState) => ({ ...prevState, hotel_name: true }));
			flag = false;
		}
		if (!Values.hotel_code) {
			setLocalErrorMessage((prevState) => ({ ...prevState, hotel_code: true }));
			flag = false;
		}
		if (!Values.hotel_email) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				hotel_email: true,
			}));
			flag = false;
		}
		if (!Values.property_type) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				property_type: true,
			}));
			flag = false;
		}
		if (!Values.booking_email) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				booking_email: true,
			}));
			flag = false;
		}
		if (!BookingPhoneNumber) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				booking_phone: true,
			}));
			flag = false;
		}
		if (!Values.hotel_address) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				hotel_address: true,
			}));
			flag = false;
		}
		if (!Values.year_built) {
			setLocalErrorMessage((prevState) => ({ ...prevState, year_built: true }));
			flag = false;
		}
		if (!Values.destination) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				destination: true,
			}));
			flag = false;
		}
		if (!EmergencyPhoneNumber) {
			setLocalErrorMessage((prevState) => ({
				...prevState,
				emergency_phone: true,
			}));
			flag = false;
		}
		if (flag) {
			if (data) {
				/// For Update ///
				Values.id = data?.id;
				Values.weekend_days = weekendDays;
				Values.emergency_phone = EmergencyPhoneNumber;
				Values.booking_phone = BookingPhoneNumber;
				dispatch(handlerUpdate(Values));
			} else {
				/// for Added ///
				Values.weekend_days = weekendDays;
				Values.emergency_phone = EmergencyPhoneNumber;
				Values.booking_phone = BookingPhoneNumber;
				dispatch(handlerCreate(Values));
			}
		}
	};
	const [value, setValue] = useState();
	const [SelectedIndex, setSelectedIndex] = useState(null);

	const times = [
		"12:00 AM",
		"1:00 AM",
		"2:00 AM",
		"3:00 AM",
		"4:00 AM",
		"5:00 AM",
	];
	return (
		<div className="py-5 outerWrapperBookProfessional">
			<div className="container">
				<p className="text-center">Take a Deep Breath</p>
				<h3 className="headingColor text-center mb-3">Book Professionals</h3>
				<div className="bg-white p-4 rounded boxShadow">
					<form className="row g-3" onSubmit={onSubmit}>
						<div className="col-md-6">
							<label className="form-label">First Name*</label>
							<input
								value={Values.hotel_code}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_code ? "inputFieldRedColor" : ""
								}`}
								placeholder="First Name*"
								type="text"
								name="hotel_code"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_code && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Last Name*</label>
							<input
								value={Values.hotel_name}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_name ? "inputFieldRedColor" : ""
								}`}
								placeholder="Last Name*"
								type="text"
								name="hotel_name"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_name && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Phone Number*</label>
							<PhoneInput
								className={`form-control ${
									localErrorMessage.hotel_email ? "inputFieldRedColor" : ""
								}`}
								placeholder="Enter phone number"
								value={value}
								onChange={setValue}
							/>
							{localErrorMessage.hotel_email && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input
								value={Values.year_built}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.year_built ? "inputFieldRedColor" : ""
								}`}
								placeholder="Year Built"
								type="number"
								name="year_built"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.year_built && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Address</label>
							<input
								value={Values.hotel_address}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_address ? "inputFieldRedColor" : ""
								}`}
								placeholder="Address"
								type="text"
								name="hotel_address"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_address && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Choose Services</label>
							<input
								value={Values.hotel_location}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_location ? "inputFieldRedColor" : ""
								}`}
								placeholder="Location"
								type="text"
								name="hotel_location"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_location && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-12">
							<label className="form-label">
								How many hours do you need your professional to stay?{" "}
							</label>
							<input
								value={Values.booking_email}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.booking_email ? "inputFieldRedColor" : ""
								}`}
								placeholder="Email"
								type="email"
								name="booking_email"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.booking_email && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>

						<div className="col-md-6">
							<label className="form-label">Select a Date & Time</label>
							<div>
								<CustomStyledCalendar />
							</div>
						</div>
						<div className="col-md-6">
							<label className="form-label">Wednesday, March 22</label>
							{times.map((time, index) => {
								return (
									<p
										className={`outerWrapperTimes m-2 ${
											SelectedIndex === index ? "outerWrapperTimesActive" : ""
										}`}
										key={index}
										onClick={() => {
											setSelectedIndex(index);
										}}
									>
										{time}
									</p>
								);
							})}
						</div>

						<div className="col-md-6">
							<label className="form-label">Instruction</label>
							<input
								value={Values.hotel_location}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_location ? "inputFieldRedColor" : ""
								}`}
								placeholder="Location"
								type="text"
								name="hotel_location"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_location && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>
						<div className="col-md-6">
							<label className="form-label">Price Calculation</label>
							<input
								value={Values.hotel_location}
								onChange={handleChange}
								className={`form-control ${
									localErrorMessage.hotel_location ? "inputFieldRedColor" : ""
								}`}
								placeholder="Location"
								type="text"
								name="hotel_location"
								aria-autocomplete="list"
								autoCorrect="off"
							/>
							{localErrorMessage.hotel_location && (
								<Alert variant="danger">This field is required</Alert>
							)}
						</div>

						<div className="col-md-6">
							<div className="outerWrapperInputCheckBox mb-2 d-flex align-items-center">
								<input
									type="checkbox"
									id="is_offline_booking"
									name="is_offline_booking"
									className="InputFieldCheckBox checkBoxInFilter me-1"
									checked={Values.is_offline_booking}
									onChange={handleChange}
								/>
								<label htmlFor="is_offline_booking">
									I agree terms & Policy
								</label>
							</div>
						</div>

						<div className="d-flex gap-2">
							<Button type="button" className="cancel">
								Cancel
							</Button>
							<Button type="submit" className="button">
								Save
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookProfessional;

import React, { useState, useEffect, useRef } from "react";
function CustomDropdown({
	options,
	selectOption,
	cssStyle,
	validationBorderColorRed,
	outerIndex,
	defaultSelect,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const [selectedOption, setSelectedOption] = useState(defaultSelect);
	const [SelectedLabel, setSelectedLabel] = useState(defaultSelect);
	const dropdownRef = useRef(null);
	function handleSelect(option) {
		setSelectedOption(option.value);
		setSelectedLabel(option.label);
		selectOption(option, outerIndex);
		setIsOpen(false);
	}
	function handleClickOutside(e) {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	// useEffect(() => {
	//     setSelectedOption(defaultSelect)

	// }, [defaultSelect])

	return (
		<div className="position-relative" ref={dropdownRef}>
			<div
				className=" custom-dropdown d-flex align-items-center"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className="me-2">
					{SelectedLabel ? (
						SelectedLabel
					) : (
						<p className="DropDownLabelSelectOption">Select option</p>
					)}
				</p>
				<img src="/assets/icons/AngleDown.svg" alt="" />
			</div>
			{isOpen && (
				<ul className="custom-dropdown-options ps-0 pt-1 pb-1">
					{options?.map((option, index) => (
						<li
							key={index}
							className={`custom-dropdown-option  ${
								option?.value === selectedOption ? "selected" : ""
							}`}
							onClick={() => handleSelect(option)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default CustomDropdown;

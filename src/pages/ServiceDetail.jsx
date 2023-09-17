import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { ServiceDetails } from "../services/Details";
const ServiceDetail = () => {
	const [Service, setService] = useState(null);
	let location = useLocation();
	let id = location.search.replace("?", "");
	useEffect(() => {
		if (id) {
			ServiceDetails.findIndex((item) => {
				if (item.serviceId === id) {
					console.log("kkk", item);
					setService(item);
				}
			});
		}
	}, []);
	console.log("Service", Service);
	console.log("hllo id", id);
	return (
		<div className="my-5">
			<div className="container">
				<div className="d-flex gap-1 align-items-center justify-content-between mt-3 mb-1">
					<h2 className="headingColor">Carpenter Service</h2>
					<div className="d-flex gap-2">
						<img
							className="w-100"
							src="/assets/icons/facebookService.svg"
							alt="fb"
						/>
						<img
							className="w-100"
							src="/assets/icons/whatsAppService.svg"
							alt="whatsApp"
						/>
						<img
							className="w-100"
							src="/assets/icons/EmialService.svg"
							alt="email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<p className="ServiceBoxDescription">
							{Service && Service?.detailContent?.topContent}
						</p>
						<Button className="button mt-2">Book Now</Button>
					</div>
					<div className="col-md-6">
						<img
							className="ServiceImage"
							src={Service && Service?.image}
							alt="carpenter"
						/>
					</div>
				</div>
				<h3 className="my-4">
					For big projects always rely on top {Service?.heading} service Dubai
					like Home Fix Repairs
				</h3>
				<p className="ServiceBoxDescription">
					{Service && Service?.detailContent?.midContent}
					<h4>
						<Link
							className="text-decoration-none"
							to={"/furniture-service-details"}
						>
							Here Emergency Custom Made Furniture Services | Get Your Dream
							Furniture Today
						</Link>
					</h4>
				</p>
				<div className="row my-4">
					<div className="col-md-6">
						<div className="w-100">
							<ReactPlayer className="w-100" url={Service && Service?.video} />
						</div>
					</div>
					<div className="col-md-6">
						<h4>Kitchen Door Hinges Fixing Dubai:</h4>
						<p className="ServiceBoxDescription">
							{Service && Service?.detailContent?.bottomContent}
						</p>
						<Button className="button mt-2">Book Now</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetail;

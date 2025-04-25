import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("yellow");
	
	return (
		<>
		<div className="support">

		</div>

		<div className="traffic-light">

			<div 
			onClick={()=> setSelectedColor("red") }
			className={"light red" + (selectedColor === "red" ? " glow" : "")}>

			</div>

			<div 
			onClick={()=> setSelectedColor("yellow") }
			className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>

			<div
			onClick={()=> setSelectedColor("green") }
			className={"light green"+(selectedColor === "green" ? " glow" : "")}></div>

		</div>
		<div className="message alert alert-info">Click on color to see it glowing</div>
		</>
		
	);
};

export default Home;
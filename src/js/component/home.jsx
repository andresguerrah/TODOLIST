import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, addTarea]=useState(["tarea1","tarea2","Tarea3"]);
	return (
		<div className="content">
			<h1>To Do List!</h1><button>Agregar</button>
			<input type={"text"}/>
			<div>{tarea.map((valor, indice, arr)=>{
				return <li key={indice}>{valor}
				<button>X</button>
				</li>
		})}</div>
		<h5>Tareas Restantes: {tarea.length}</h5>
		</div>
	);
};

export default Home;

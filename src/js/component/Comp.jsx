import React, { useState } from "react";


//create your first component
const Comp = (props) => {
	const [inputText, setInputText]=useState("");
	
	const manejarFormulario = (evento =>{
		setInputText(event.target.value);
	})

	const submit = (event) => {
		event.preventDefault();
		props.nuevaTarea(inputText);
	}



	return (
		<div className="content" onSubmit={submit}>
			<h1>To Do List!</h1>
			<input 
				type={"text"}
				value={imputText}
				onChange={manejarFormulario}
			/>
			<button>Agregar</button>
			<div>
			{tarea.map((valor, indice, arr)=>{
				return 
				<li key={indice}>{valor}
				<button>X</button>
				</li>
		})}</div>
		<h5>Tareas Restantes: {tarea.length}</h5>
		</div>
	);
};

export default Comp;

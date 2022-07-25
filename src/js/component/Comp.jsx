import React, { useState } from "react";


//create your first component
const Comp = (props) => {
	const [inputText, setInputText]=useState("");
	
	const manejarFormulario = (evento =>{
		setInputText(evento.target.value);
	})

	const submit = (event) => {
		event.preventDefault();
		props.nuevaTarea(inputText);
	}
	//const eliminar = (event)=>{
	//	listaTareas.filter((item) => item !== {nuevaTarea})//ojo aqui
	//}

	return (
		<div className="content" onSubmit={submit}>
			<h1>To Do List!</h1>
			<input 
				type={"text"}
				value={inputText}
				onChange={manejarFormulario}
			/>
			<button onClick={submit}>Agregar</button>
			<div>
			{props.listaTareas.map((valor, indice, arr)=>{
				return <li key={indice}>{valor}
				<button onClick={eliminar}>X</button>
				</li>
		})}</div>
		<h5>Tareas Restantes: {props.listaTareas.length}</h5>
		</div>
	);
};

export default Comp;

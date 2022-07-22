import React, {useState} from "react";
import Comp from "./Comp.jsx";


//create your first component
const Home = () => {

    const [listaTareas, setListaTareas] = useState([]);

    const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas])
	}


	return (
		<div className="App">
            <Comp
            nuevaTarea={nuevaTarea}
            />
		</div>
	);
};

export default Home;

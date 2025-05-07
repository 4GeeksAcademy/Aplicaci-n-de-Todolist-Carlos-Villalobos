import React, { useEffect } from "react";
import { useState } from "react";

//include images into your bundle

//create your first component
const Lista = () => {
    const [tareas, setTareas] = useState([]);
    const [entrada, setEntrada] = useState('');

    const entradaTarea = (evento) => {
        setEntrada(evento.target.value);
    }


    const agregarTarea = () =>{
    setTareas([...tareas, entrada]);
    setEntrada('');
    }

    const eliminarTarea = (indexAEliminar) => {
        setTareas(tareas.filter((_, index) => index !== indexAEliminar))
        
        
    }




    return (
        <div className="text-center">
            <h1 className="titulo">todo</h1>
            <input type="text" onChange={entradaTarea} onKeyDown={(e)=> {
                // console.log(e.key);
                
                if (e.key == 'Enter') {
                    agregarTarea()
                    
                }
            }} value={entrada} placeholder="Cuál es tu nueva tarea?" />
            <ol>
                {tareas.map((tarea, i) => (
                    <><li key={i}>{tarea}</li><button key={i} type="button" className="btn btn-primary" onClick={() => eliminarTarea(i)}>X</button></>
                ))}
                
            </ol>


        </div>
    );
};

export default Lista;
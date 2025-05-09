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

    const placeHolderDeTarea = () => {
         return tareas.length === 0 ? "No hay tareas, añadir tareas" : "¿Quieres añadir más tares?";
    }




    return (
        <div className="lista text-center container row d-flex justify-content-center">
            <input className="insertar-tareas col-12" type="text" onChange={entradaTarea} onKeyDown={(e)=> {
                // console.log(e.key);
                
                if (e.key == 'Enter') {
                    agregarTarea()
                    
                }
            }} value={entrada} placeholder={placeHolderDeTarea()} />
            <div className="container">
            <ol className="text-center container row justify-content-center">
                {tareas.map((tarea, i) => (
                    <div key={i} className="tarea-item-wrapper d-flex align-items-center my-2">
              <li className="col-11 tareas">{tarea}</li>
              <button
                type="button"
                className="col-1 boton " 
                onClick={() => eliminarTarea(i)}
              >
                X
              </button>
            </div>
                ))}
                
            </ol>
                </div>

                <div>
                    <p>Tareas restantes: {tareas.length}</p>
                </div>

        </div>
    );
};

export default Lista;
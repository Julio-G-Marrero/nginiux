import React from "react";
import api from "../utils/api";
function NominaComponente() {
    const [periodos, setPeriodos] = React.useState([])
    const [numeroPeriodo, setNumeroPeriodo] = React.useState("")

    function buscarPeriodoId(){
        if(numeroPeriodo == "") {
            alert('Coloque el ID')
        }else {
            fetchPeriodoPorId()
        }
    }
    function fetchPeriodoPorId(){
        fetch(`${api.addressEndpoints}/nomina?noPeriodo=${numeroPeriodo}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((response) => response.json())
          .then((data) => {
            if(data.error) {
                alert(data.error)
            }else if(data.message) {
                alert(data.message)
            }else {
                setPeriodos(data)
            }
          })
          .catch((err) => console.log(err));
    }
    function handleChangeIdPeriodo(e) {
        setNumeroPeriodo(e.target.value)
    }
    return(
        <>
        <h2 className="text-3xl font-bold mb-6">
            Periodos de Nomina
        </h2>
        <div className='w-2/5 mx-auto'>
            <div className="mb-6 flex justify-center items-center gap-4">
                <label for="order-id" className=" text-gray-700 font-bold ">Buscar Periodo por ID:</label>
                <input type="number" id="order-id" className="shadow appearance-none border rounded w-20 text-center py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ID"
                min={1}
                value={numeroPeriodo}
                onChange={handleChangeIdPeriodo}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                onClick={buscarPeriodoId}
                >
                    Buscar
                </button>
            </div>
            <div className="overflow-x-auto max-w-full heigth-tabla">
                <table className="min-w-full border-collapse border border-gray-200 whitespace-nowrap">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">No. Período</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Días Trabajados</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">No. Trabajador</th>
                    </tr>
                    </thead>
                    {periodos == undefined 
                    ?
                    ""
                    :
                    <tbody>
                    {periodos.map((periodo,) => (
                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{periodo.NO_PERIODO}</td>
                            <td className="border border-gray-300 px-4 py-2">{periodo.DIAS_TRABAJADOS}</td>
                            <td className="border border-gray-300 px-4 py-2">{periodo.NO_TRABAJADOR}</td>
                        </tr>
                    ))}
                    </tbody> 
                    }
                </table>
            </div>
        </div>
        </>
    )
}

export default NominaComponente
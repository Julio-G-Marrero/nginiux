import React from "react";
import api from "../utils/api";
function OrdenesCompraComponente() {
    const [ordenes, setOrdenes] = React.useState([])
    const [idOrden, setIdOrden] = React.useState([])

    function buscarOrdenId(){
        if(idOrden == "") {
            alert('Coloque el ID')
        }else {
            fetchOrdenes()
        }
    }

    function handleChangeIdOrden(e){
        setIdOrden(e.target.value)
    }

    function fetchOrdenes(){
        fetch(`${api.addressEndpoints}/ordenes/${idOrden}`, {
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
                setOrdenes(data.resultados)
            }
          })
          .catch((err) => console.log(err));
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES'); // Formato en español
    };
    console.log(ordenes)
    return(
        <>
        <h2 className="text-3xl font-bold mb-2">
              Buscar Ordenes de compra
            </h2>
        <div className='w-5/5 mx-auto'>
            <div className="">
                <div className="container mx-auto p-6 text-left">
                    <div className="mb-6 w-1/3">
                        <label for="order-id" className="block text-gray-700 font-bold mb-1">Buscar Orden por ID:</label>
                        <input type="number" id="order-id" className="shadow appearance-none border rounded w-20 text-center mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ID"
                        value={idOrden}
                        min={1}
                        onChange={handleChangeIdOrden}
                        />
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={buscarOrdenId}>
                            Buscar
                        </button>
                    </div>
                    <div className="overflow-x-auto max-w-full heigth-tabla">
                        <table className="min-w-full border-collapse border border-gray-200 whitespace-nowrap">
                            <thead>
                            <tr className="bg-gray-100">
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Fecha Promesa</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Descripción Pieza</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Cantidad</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Precio</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Insumo</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Autorizado Por</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Status</th>
                                <th className="text-gray-700 font-bold mb-2 pl-4 p-2">Total Costo</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ordenes.map((orden) => (
                                <tr className="odd:bg-white even:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">
                                        {formatDate(orden.FECHA_PROMESA)}
                                        </td>
                                    <td className="border border-gray-300 px-4 py-2">{orden.DESCR_PIEZA}</td>
                                    <td className="border border-gray-300 px-4 py-2">{orden.CANTIDAD}</td>
                                    <td className="border border-gray-300 px-4 py-2">{orden.PRECIO}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {orden.ES_INSUMO_CONSUMO == 1 ? "SI" : "NO"}</td>
                                    <td className="border border-gray-300 px-4 py-2 max-w-60 overflow">{orden.AUTORIZADO_POR.trim()}</td>
                                    <td className="border border-gray-300 px-4 py-2 max-w-60 overflow">
                                    {orden.STATUS ? orden.STATUS : 'Sin Definir'}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 max-w-60 overflow">
                                        {orden.TOTAL_COSTO}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrdenesCompraComponente
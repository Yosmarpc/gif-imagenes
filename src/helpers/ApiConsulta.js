

export const ApiConsulta = async () => {
 
   
    let url_api = `http://workflowcci.sistemasygestion.cl/APIS/ApiBKPMAU/General/ObtieneProcedimientosRecurrentes`;
    
    const url = `${url_api}`;
    const resp = await fetch(url);
    const { data } = await resp.json();


    const DataFlujos = data.map(data => {

        return {
            ID_FLUJO: data.ID_FLUJO,
            GL_FLUJO: data.GL_FLUJO,
            VISITAS: data.VISITAS, 
            

        }

    })


   console.log(DataFlujos);
    return DataFlujos;
}

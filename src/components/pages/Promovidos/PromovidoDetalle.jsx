import React, { useEffect, Fragment } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonaActivistaAccion } from "../../../redux/PersonaActivistaDucks";
import MaterialTable from "material-table";
import MaterialTableCpt from '../../utils/MaterialTableCpt';

const PromovidoDetalle = () => {
  //Store y configuracion REDUX
  const dispatch = useDispatch();
  const activistas = useSelector((store) => store.personasActivistas.array);


  //Recibimos parametros
  const { id } = useParams()

  //Persona
  const persona = {
    id: id,
    votado: 0,
  };

  //Hacemos carga inicial
  useEffect(() => {
    persona.id = id;
    dispatch(obtenerPersonaActivistaAccion(persona));
  }, []);

  //Columnas
  const columns = [
    { title: 'VOTADO', field: 'votado', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
    { title: 'IDPUESTO', field: 'idpuesto', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
    { title: 'IDROL', field: 'idrol', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
    { title: 'IDJEFE', field: 'idjefe', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
    { title: 'ZONA', field: 'zona', headerStyle: { minWidth: 100 }, cellStyle: { minWidth: 100 }, },
    { title: 'PUESTO', field: 'puesto', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
    { title: 'NOMBRE', field: 'nombre', headerStyle: { minWidth: 380 }, cellStyle: { minWidth: 380 }, },
    { title: 'TELEFONO', field: 'telefono', headerStyle: { minWidth: 140 }, cellStyle: { minWidth: 140 }, },
    { title: 'DOMICILIO', field: 'domicilio', headerStyle: { minWidth: 280 }, cellStyle: { minWidth: 280 }, },
    { title: 'CLAVEELECTOR', field: 'claveelector', headerStyle: { minWidth: 180 }, cellStyle: { minWidth: 180 }, },
  ];

  return (

    //reasignamos id
    activistas.map(
      item => {
        item.id = item.idpuesto
      }
    ),
    <div>
      <h3>Lista</h3>
      <MaterialTableCpt title={"Detalles promovido"} columns={columns} data={activistas} parentChildData={(row, rows) => rows.find(a => a.id === row.idjefe)} />
    </div>

  )
}

export default PromovidoDetalle


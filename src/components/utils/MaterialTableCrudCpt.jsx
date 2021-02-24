import React, { Fragment } from 'react'
import MaterialTable from "material-table";


const MaterialTableCrudCpt = (props) => {
    const { useState } = React;

    const [columns, setColumns] = useState(props.columns);

    const [data, setData] = useState(props.data);

    return (
        <MaterialTable
            title="Editable Preview"
            options={{
                rowStyle: {
                    fontSize: 12,
                },
            }}
            columns={columns}
            data={data}

            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve(alert("add"));

                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve(alert("update"));
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve(alert("add"));
                        }, 1000)
                    }),
            }}
        />
    )
}


export default MaterialTableCrudCpt




import React from 'react'
import MaterialTable from "material-table";
import { makeStyles, Hidden } from '@material-ui/core'
import Paper from "@material-ui/core/Paper";



const styles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        width: "100%",
        minWidth: 700
    }

}))
const MaterialTableEditableCpt = (props) => {
    const classes = styles()
    const { useState } = React;
    const [columns, setColumns] = useState(props.columns);
    const [data, setData] = useState(props.data);

    // console.log(columns)
    // console.log(data)


    return (

        <div style={{ height: 400, width: '70%' }}>
            <MaterialTable
                title="Gestion de promovidos"
                columns={props.columns}
                options={{
                    sorting: true
                }}
                data={props.data}
                options={{
                    rowStyle: {
                        fontSize: 12,
                    },
                }}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                props.handleCreate(newData);
                                setData([...data, newData]);
                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                props.handleUpdate(newData);
                                setData([...dataUpdate]);
                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                props.handleDelete(oldData);
                                setData([...dataDelete]);
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>

    )
}

export default MaterialTableEditableCpt
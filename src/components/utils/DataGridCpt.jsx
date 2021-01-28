import React, { Fragment } from 'react'
import { DataGrid } from '@material-ui/data-grid';

const DataGridCpt = (props) => {
    return (
        <Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={props.actArray} columns={props.columns} pageSize={5} checkboxSelection />
            </div>
        </Fragment>
    )
}

export default DataGridCpt

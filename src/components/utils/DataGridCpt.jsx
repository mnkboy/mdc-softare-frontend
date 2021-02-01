import React, { Fragment } from 'react'
import { DataGrid } from '@material-ui/data-grid';

const DataGridCpt = (props) => {
    return (
        <Fragment>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid sortingOrder={['desc', 'asc']}
                    showToolbar
                    disableMultipleSelection={true}
                    disableColumnMenu
                    loading={props.reload}
                    sortModel={[
                        {
                            field: 'id',
                            sort: 'asc',
                        },
                    ]}
                    rows={props.actArray}
                    columns={props.columns.map((column) => ({
                        ...column,
                        disableClickEventBubbling: true,
                    }))}
                    pageSize={5}
                    checkboxSelection={false}
                />
            </div>
        </Fragment>
    )
}

export default DataGridCpt

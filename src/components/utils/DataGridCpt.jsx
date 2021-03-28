import React, { Fragment } from 'react'
import { DataGrid } from '@material-ui/data-grid';

const DataGridCpt = (props) => {
    const pagesize = props.pagesize === undefined ? 15 : props.pagesize;
    return (
        <Fragment>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid sortingOrder={['desc', 'asc']}
                    showToolbar
                    disableMultipleSelection={true}

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
                    pageSize={pagesize}
                    checkboxSelection={false}
                />
            </div>
        </Fragment>
    )
}

export default DataGridCpt

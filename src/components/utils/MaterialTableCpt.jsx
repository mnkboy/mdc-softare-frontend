import React, { Fragment } from 'react'
import MaterialTable from "material-table";

const MaterialTableCpt = (props) => {
    return (
        <Fragment>
            <div style={{ height: 400, width: '90%' }}>
                < MaterialTable
                    title={props.title}
                    options={{
                        rowStyle: {
                            fontSize: 12,
                        },
                    }}
                    data={props.data}
                    columns={props.columns}
                    parentChildData={props.parentChildData}
                />
            </div>
        </Fragment>
    )
}

export default MaterialTableCpt

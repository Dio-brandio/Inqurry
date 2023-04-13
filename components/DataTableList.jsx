import React, { useEffect, useState } from 'react'

const DataTableList = ({ id, api, columns, apifield }) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        try {

        } catch (error) {

        }
        const getAllInquiry = async () => {
            const data = await fetch(api)
            const resposnse = await data.json()
            if (resposnse.ok) {
                setdata(resposnse[`${apifield}`][0])
                setloading(false)
            }

        }
        getAllInquiry()
    }, [])
    const createTable = () => {
        const feilds = Object.keys(data[0])
        const columnsintable = []
        feilds.forEach(((field, i) => {
            if (columns.includes(field)) {
                columnsintable.push({ data: field, title: field })
            }
        }))
        console.log(columnsintable);
        const copy = data.map(object => ({ ...object }))
        copy.forEach(object => {
            feilds.forEach(((field, i) => {
                if (!columns.includes(field)) {
                    delete object[`${field}`];
                }
            }))
        });

        if (!$.fn.dataTable.isDataTable(`#${id}`)) {
            $(`#${id}`).DataTable({
                data: copy,
                columns: columnsintable,
            });
        }
    }
    if (!loading && data.length > 0) {
        createTable()
    }

    return (<>
        <div className="table-responsive">
            {loading ? <h3>Loading...</h3> : null}

            <table id={`${id}`} className='table'>
            </table>
        </div>

    </>
    )
}

export default DataTableList
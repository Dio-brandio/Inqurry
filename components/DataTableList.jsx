import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const DataTableList = ({ id, api, columns, apifield, userPath }) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const router = useRouter()
    useEffect(() => {
        const getAllData = async () => {
            const data = await fetch(api)
            const resposnse = await data.json()
            if (resposnse.ok) {
                setdata(resposnse[`${apifield}`][0])
            }
            setloading(false)
        }
        getAllData()
    }, [router.pathname])
   
    const createTable = () => {
        const feilds = Object.keys(data[0])
        const columnsintable = []
        columns.forEach(((field, i) => {
            if (feilds.includes(field)) {
                if (field == "inquiry_date" || field == "upcoming_date") {
                    columnsintable.push({
                        data: null, title: field, mRender: (o) => {
                            return o[`${field}`].split("T")[0]
                        }
                    })
                } else {
                    columnsintable.push({ data: field, title: field })

                }
            }
        }))
        columnsintable.push({
            data: null, render: function (data, type, row) {
                return `<a target="_blank" href="/${userPath}/action/update/${apifield}/${data.id}" class="btn btn-info" >Edit</a>`
            }, title: "Action"
        })
        const copy = data.map(object => ({ ...object }))
        copy.forEach(object => {
            feilds.forEach(((field) => {
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
    if (!loading && data.length < 1) {
        return (<>
            <Head>
                <title>404</title>
            </Head>
            <h2 className='text-secondary'>Not Available</h2>
        </>)
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
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axiosInstance from '../../lib/api/request';

const GuestBookSampleContainer = () => {
    const columns = [
        { field: 'name', headerName: '이름', width: 70 },
        { field: 'contents', headerName: '내용', width: 260 }
    ];

    const pageNumber = 0;
    // const [pageNumber, setPageNumber] = useState(0);    
    const [rows, setRows] = useState([]);

    // 리스트 불러오기
    useEffect(()=>{
        const getList = () => {
            axiosInstance.get(`api/sample/guestbooks/page`,{params: { cardId:1, pageNumber, pageSize: 3}})
            .then(res => {
                console.log(res.data)
                if(Array.isArray(res.data.content))
                    setRows(res.data.content);
                else
                    setRows([]);
            })
            .catch(err=>console.log(err));
        }

        getList();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default GuestBookSampleContainer;
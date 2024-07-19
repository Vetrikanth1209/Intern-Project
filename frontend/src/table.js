import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, Container} from '@mui/material';
import Nav from './appbar';
import { callallresourse } from './axios';


export const Table = () => {
    const [resources, setResources] = useState([]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'resourceId', headerName: 'Resource ID', width: 150 },
        { field: 'resourceName', headerName: 'Resource Name', width: 200 },
        { field: 'enrolledDate', headerName: 'Enrolled Date', width: 200 },
        { field: 'coursename', headerName: 'Course Name', width: 200 },
        { field: 'contact', headerName: 'Contact', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'courseId', headerName: 'Course ID', width: 150 },
    ];

    const fetchResource = async()=>{
        const response = await callallresourse()
        setResources(response.data.details); 
    }
    
    useEffect(() => {
        fetchResource();
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Nav />
            <Container maxWidth="lg">
            <Card sx={{ boxShadow: 6, borderRadius: 2, mt: 8, background: 'linear-gradient(135deg, #e3f2fd 30%, #f3e5f5 90%)' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
                        Resource Table
                    </Typography>
                   
                        <DataGrid
                            getRowId={(obj) => obj._id}
                            rows={resources}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={5}
                            autoHeight
                            disableSelectionOnClick
                        />
                    
                </CardContent>
            </Card>
        </Container>
        </div>
    );
};

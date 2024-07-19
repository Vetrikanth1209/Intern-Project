import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Box, Container, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { callresource } from './axios';
import PersonIcon from '@mui/icons-material/Person';
import Nav from './appbar';

export const Filter_resource = () => {
    const [datas, setDatas] = useState({
        "coursename": ""
    });

    const [resourceData, setResourceData] = useState([]);

    const collect = (eve) => {
        const { name, value } = eve.target;
        setDatas((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const publish = async () => {
        try {
            const res = await callresource(datas);
            setResourceData(res.data.resourceNames || []); 
            alert(JSON.stringify(res.data)); 
        } catch (error) {
            console.error('Error fetching resources:', error);
        }
    };

    const cancel = () => {
        resetForm();
        setResourceData([]); 
    };

    const resetForm = () => {
        setDatas({
            "coursename": ""
        });
    };

    return (
        <>
        <Nav />
            <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' ,marginTop:'100px'}}>
                <Card sx={{ boxShadow: 6, borderRadius: 2, background: 'linear-gradient(135deg, #e3f2fd 30%, #f3e5f5 90%)', width: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
                            Filter Resource
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                backgroundColor: '#ffffff',
                                borderRadius: 2,
                                p: 3,
                            }}
                        >
                            <TextField
                                label="Course Name"
                                variant="outlined"
                                onChange={collect}
                                value={datas.coursename}
                                name="coursename"
                                fullWidth
                                InputProps={{
                                    sx: { borderRadius: 1, backgroundColor: '#f3f3f3' },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color="primary" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={publish}
                                    sx={{
                                        minWidth: '100px',
                                        borderRadius: 1,
                                        backgroundColor: '#3f51b5',
                                        '&:hover': {
                                            backgroundColor: '#303f9f'
                                        }
                                    }}
                                >
                                    FILTER
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={cancel}
                                    sx={{
                                        minWidth: '100px',
                                        borderRadius: 1,
                                        borderColor: '#f50057',
                                        color: '#f50057',
                                        '&:hover': {
                                            backgroundColor: '#f50057',
                                            color: '#ffffff'
                                        }
                                    }}
                                >
                                    CANCEL
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Table to display resource data */}
                <Box sx={{ width: '100%', mt: 4 }}>
                    <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
                        Resource Details
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Resource Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resourceData.length > 0 ? (
                                    resourceData.map((resourceName, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{resourceName}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={1} align="center">No Data Available</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
};

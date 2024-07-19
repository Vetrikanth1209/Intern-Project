import React, { useState, useEffect } from 'react';
import { TextField, Button, Autocomplete, Card, CardContent, Typography, Box, Container, InputAdornment } from '@mui/material';
import { callallcourse, callpublish } from './axios';
import { useNavigate } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Nav from './appbar';

export const Form = () => {
    const [datas, setDatas] = useState({
        "resourceId": '',
        "resourceName": "",
        "enrolledDate": "",
        "coursename": "",
        "courseId": '',
        "contact": '',
        "email": ""
    });

    const [courseList, setCourseList] = useState([]);
    const nav = useNavigate();

    const fetchCourse = async () => {
       
            const response = await callallcourse();
            setCourseList(response.data);
    };

    useEffect(() => {
        fetchCourse();
    }, []);

    const collect = (eve) => {
        const { name, value } = eve.target;
        setDatas((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCourseSelect = (event, newValue) => {
        setDatas((prev) => ({
            ...prev,
            coursename: newValue.coursename,
            courseId: newValue.courseId
        }));
    };

    const publish = async () => {
        try {
            const res = await callpublish(datas);
            alert(JSON.stringify(res));
            nav('/table');
            resetForm();
        } catch (error) {
            console.error('Error publishing data:', error);
        }
    };

    const cancel = async () => {
        resetForm();
        try {
            const res = await callallcourse();
            alert(JSON.stringify(res.data));
        } catch (error) {
            console.error('Error fetching courses on cancel:', error);
        }
    };

    const resetForm = () => {
        setDatas({
            "resourceId": "",
            "resourceName": "",
            "enrolledDate": "",
            "coursename": "",
            "courseId": '',
            "contact": "",
            "email": ""
        });
    };

    return (
        <>
        <Nav />
         <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
             <Card sx={{ boxShadow: 6, borderRadius: 2, background: 'linear-gradient(135deg, #e3f2fd 30%, #f3e5f5 90%)', width: '100%' }}>
                 <CardContent sx={{ p: 4 }}>
                     <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', color: '#3f51b5' }}>
                         Admit Resource
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
                             label="Resource ID"
                             variant="outlined"
                             onChange={collect}
                             value={datas.resourceId}
                             name="resourceId"
                             fullWidth
                             InputProps={{
                                 sx: { borderRadius: 1, backgroundColor: '#f3f3f3' },
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <DescriptionIcon color="primary" />
                                     </InputAdornment>
                                 )
                             }}
                         />
                         <TextField
                             label="Resource Name"
                             variant="outlined"
                             onChange={collect}
                             value={datas.resourceName}
                             name="resourceName"
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
                         <TextField
                             label="Enrolled Date"
                             variant="outlined"
                             onChange={collect}
                             value={datas.enrolledDate}
                             name="enrolledDate"
                             fullWidth
                             InputProps={{
                                 sx: { borderRadius: 1, backgroundColor: '#f3f3f3' },
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <DateRangeIcon color="primary" />
                                     </InputAdornment>
                                 )
                             }}
                         />
                         <Autocomplete
                             options={courseList}
                             getOptionLabel={(option) => option.coursename || ''}
                             onChange={handleCourseSelect}
                             value={courseList.find(course => course.courseId === datas.courseId) || null}
                             renderInput={(params) => (
                                 <TextField
                                     {...params}
                                     label="Course Name"
                                     variant="outlined"
                                     fullWidth
                                     InputProps={{
                                         ...params.InputProps,
                                         sx: { backgroundColor: '#f3f3f3', borderRadius: 1 }
                                     }}
                                 />
                             )}
                         />
                         <TextField
                             label="Contact"
                             variant="outlined"
                             onChange={collect}
                             value={datas.contact}
                             name="contact"
                             fullWidth
                             InputProps={{
                                 sx: { borderRadius: 1, backgroundColor: '#f3f3f3' },
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <PhoneIcon color="primary" />
                                     </InputAdornment>
                                 )
                             }}
                         />
                         <TextField
                             label="Email"
                             variant="outlined"
                             onChange={collect}
                             value={datas.email}
                             name="email"
                             fullWidth
                             InputProps={{
                                 sx: { borderRadius: 1, backgroundColor: '#f3f3f3' },
                                 startAdornment: (
                                     <InputAdornment position="start">
                                         <EmailIcon color="primary" />
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
                                 ADMIT
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
         </Container>
        </>
    );
};

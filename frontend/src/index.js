import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form } from './form';
import { Table } from './table';
import { Login } from './login';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Filter, Filter_resource } from './filter_resource_name';
import { Filter_course } from './filter_by_course';
import { Filter_date } from './filter_by_date';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  sessionStorage.getItem('logged')
  ?
    <>
    <BrowserRouter>
        <Routes>
          <Route  path='/' Component={Login}/>
          <Route path='/form'  Component={Form}/>
          <Route path='/table'  Component={Table}/>
          <Route path='/filter_by_resource_name'  Component={Filter_resource} />
          <Route path='/filter_by_course' Component={Filter_course} />
          <Route path='/filter_by_date'  Component={Filter_date} />
        </Routes>
    </BrowserRouter>
    </>
    :
    <>
     <BrowserRouter>
        <Routes>
          <Route  path='/' Component={Login}/>
        </Routes>
    </BrowserRouter>
    </>
  

);



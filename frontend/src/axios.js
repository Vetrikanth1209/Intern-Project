import axios from 'axios'

const url = 'http://localhost:1234'

export const callpublish = async(obj)=>{
    const log = await axios.post(`${url}/addresource`,obj)
    return log
}


export const callallresourse = async()=>{
    const log = await axios.get(`${url}/getallresource`)
    return log
}

export  const callcred = async (users)=>{
    const log = await axios.post(`${url}/signin`,users)
    return log
}

export const callresource = async(obj)=>{
    const log =  await axios.post(`${url}/fetchresourcebycourse`,obj)
    return log
}

export const callallcourse = async()=>{
    const log = await axios.get(`${url}/getallcourse`)
    return log
}


export const callexpert = async(obj)=>{
    const log = await axios.post(`${url}/fetchcoursebyexpert`,obj)
    return log
}

export const callresourcedate = async(obj)=>{
    const log = await axios.post(`${url}/fetchresourcebydate`,obj)
    return log
}
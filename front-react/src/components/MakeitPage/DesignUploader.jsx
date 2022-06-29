import { Box } from '@mui/system'
import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { setFileStoragePath } from '../../reducers/purchaseApi';

function DesignUploader() {
    const [files, setFiles] = useState([]);
    const [cookies, ] = useCookies(['user_token']);
    const dispatch = useDispatch(); 

    //파일 경로 받기
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("uploadfile", files.length && files[0].uploadedFile);
        axios({
        method: "post",
        url: 'http://13.124.100.213:8080/uploads',
        data: formData,
        headers: { "Content-Type": "multipart/form-data", Authorization: cookies.user_token }
        }).then((res) => {
            let payload= {
                filepath : res.data.images,
                state : "completed"
            }
            dispatch(setFileStoragePath(payload));
            alert('성공적으로 업로드 되었습니다!');
            setFiles([]);
            }).catch((err) => alert(err.message));
        
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFiles([...files, { uploadedFile: file }]);
    }
  return (
    <Box sx={{display : 'flex', flexDirection: 'column'}}>
        <StyledUl>파일 업로드 하기</StyledUl>
        <Form id='uploadfile'
        encType='multipart/formdata'
        onSubmit={submitHandler}>
            <Input type="file"
                    name="photo"
                    accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                    onChange={handleUpload}></Input>
            <button type='submit' form='uploadfile'>저장하기</button>
        </Form>
    </Box>
  )
}

const Form = styled.form`

`
const Input = styled.input`
`
const StyledUl = styled.ul`
    font-size: 16px;
`

export default DesignUploader

/**
 * [Title] Daum 우편번호 검색
 * [Description] 리액트 컴포넌트로 만든 Daum 우편번호 검색 서비스
 * [Usage]
 * @props onComplete {Function} : 우편번호 검색 시 선택한 정보 받아올 콜백함수
 * @props onSearch {Function} : 주소를 검색할 경우 실행되는 콜백함수
 * @props onClose {Function} : 검색 결과선택 후 우편번호 검색이 닫힐때 실행되는 콜백함수
 * @props onResize {Function} : 검색결과로 우편번호 화면 크기가 변경될때 실행되는 콜백함수
 * @props className {String} : 우편번호 검색창을 감싸는 최상위 엘리먼트 ClassName
 * @props style : 우편번호 검색창 최상위 엘리먼트 스타일
 *  @default {width:100%,height:400px}
 * @props scriptUrl {String} : Daum 우편번호 스크립트 주소
 *  @default "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
 * @props defaultQuery {String} : 우편번호 검색창에 기본으로 입력할 검색어
 *  @default undefined
 * @props autoClose {Boolean} : 우편번호 검색 완료시, 자동닫힘 여부
 *  @default true
 * @props errorMessage {React element} : 로드되지 않을때 보이는 에러 메시지
 *  @default "<p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.</p>"
 */

 import { Modal, Button, Box } from "@mui/material";
import React, {useState} from "react";
 import DaumPostcode from "react-daum-postcode";

 const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 function SearchAddress({addressHandler}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleComplete = (data) => {
     let fullAddress = data.address;
     let zipcode = data.zonecode;
     let extraAddress = "";
     // console.log(data);
     if (data.addressType === "R") {
       if (data.bname !== "") {
         extraAddress += data.bname;
       }
       if (data.buildingName !== "") {
         extraAddress +=
           extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
       }
       fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
     }
     setOpen(false);
     console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
     console.log(data.zonecode);
     addressHandler(fullAddress, zipcode);
    };
 
   const handleSearch = (data) => {
     // console.log(data);
   };
 
   return (
    <>
    <Button sx={{gridRow: '1',gridColumn : '5'}} onClick={handleOpen}>우편번호검색</Button>
    <Modal
        open={open}
        onClose={handleClose}
     >
        <Box sx={modalStyle}>
        <DaumPostcode
        onComplete={handleComplete}
        onSearch={handleSearch}
        />
        </Box>
     </Modal>
    </>
   );
 }
 
 export default SearchAddress;
 
 SearchAddress.defaultProps = {
   style: {
     width: "700px",
     height: "450px",
   },
 };
 
 /**
  * "학동로 31길 12" 입력 시
 onComplete {Function}
 @return
 {
   "q": "학동로 31길 12",
   "count": 1
 }
 
 handleSearch {Function}
 @return
 {
   "postcode": "",
   "postcode1": "",
   "postcode2": "",
   "postcodeSeq": "",
   "zonecode": "06052",
   "address": "서울 강남구 학동로31길 12",
   "addressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
   "addressType": "R",
   "bcode": "1168010800",
   "bname": "논현동",
   "bnameEnglish": "Nonhyeon-dong",
   "bname1": "",
   "bname1English": "",
   "bname2": "논현동",
   "bname2English": "Nonhyeon-dong",
   "sido": "서울",
   "sidoEnglish": "Seoul",
   "sigungu": "강남구",
   "sigunguEnglish": "Gangnam-gu",
   "sigunguCode": "11680",
   "userLanguageType": "K",
   "query": "학동로 31길 12",
   "buildingName": "벤쳐캐슬빌딩",
   "buildingCode": "1168010800100820018000001",
   "apartment": "N",
   "jibunAddress": "",
   "jibunAddressEnglish": "",
   "roadAddress": "서울 강남구 학동로31길 12",
   "roadAddressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
   "autoRoadAddress": "",
   "autoRoadAddressEnglish": "",
   "autoJibunAddress": "서울 강남구 논현동 82-17",
   "autoJibunAddressEnglish": "82-17, Nonhyeon-dong, Gangnam-gu, Seoul, Korea",
   "userSelectedType": "R",
   "noSelected": "N",
   "hname": "",
   "roadnameCode": "4166791",
   "roadname": "학동로31길",
   "roadnameEnglish": "Hakdong-ro 31-gil"
 }
  */
  
 
  
 
  
 
  
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function MenuCapture(){
//     //things that change
//     //image
//     const [image, setImage] = useState(null);
//     const [menu, set]

//     //Image changes on target?
//     const ImageChange = (e) =>{
//         const newImage= e.target.image[0];
//         setImage(newImage)
//     };

//     //read and translate
//     //input image into ocr
//     const OCR = async () =>{
//         try{
//             const ocrResponse = await axios.post('/api/ocr', image)
//         }catch (error) {
//       console.error('Menu issue:', error);
//         }
//     }

//     const GPTResponse = async (text)=>{
//         try{
//             const chatgpt = await axios.post('/api/openapi', text)
//         }catch (error) {
//             console.error('Menu issue:', error);
//         }
//     }
//     // return a div that first says "please double check this info with your actual waiter"
//     return(
//         <div>

//         </div>
//     )
// }
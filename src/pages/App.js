import * as React from 'react'
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import {useState, useEffect } from 'react'


function App(){
    const [scanResult, setScanResult]=useState(null);

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width: 250,
                height: 250,
            },
            fps: 100,
        });
    
        scanner.render(success,error);
    
        function success(result){
            scanner.clear();
            setScanResult(result)
        }
    
        function error(err){
            console.warn(err)
        }
    },[]);

    

    return (
        <div className = "App">
            <h1>QR Code Scanning</h1>
            <h2>refresh to scan a QRcode after camera view box dissapears</h2>
            {scanResult
            ? <div>Success: <a href= {scanResult}>{scanResult}</a></div>//"https://"+
            : <div id="reader"></div>

            }
            
        </div>
    );
    
}

export default App
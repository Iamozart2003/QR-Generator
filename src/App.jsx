import QRCode from "qrcode"
import { useState } from "react"

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width:800,
      margin:1,
      color:{
        dark:'#0000ff00',
        light:'#ffffffff'
      }
    } ,(err, url) => {
      if (err) return console.error(err)

      // console.log(url)
      setQrcode(url);
    })
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https//xyz.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)} />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && 
        <>
          <img src={qrcode} alt="" />
          <a href={qrcode} download="qrcode.png">Download</a>
        </>
      }
    </div>
  )
}

export default App

// Step 1: Import React
import * as React from 'react'
import QRReader from 'react-qr-code'

import App from './App';
// import sc from './components/scanner'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
     
      <App/>

    </main>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
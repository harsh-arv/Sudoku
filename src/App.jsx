import { useState } from 'react'
import TableComponent from './TableComponent'
import TextSplitAnimation from './TextSplitAnimation'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TableComponent/>
    {/* <TextSplitAnimation text="Hevfdbvfdbfdbfdbdfvsdvfdsorld!" /> */}

    </>
  )
}

export default App

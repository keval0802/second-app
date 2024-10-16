
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form'
import TableData from './components/TableData'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/table' element={<TableData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

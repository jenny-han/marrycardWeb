import { Route, Routes } from 'react-router-dom'
import SamplePage from './pages/SamplePage'
import './App.css'
import Layout from './Layout'
import EditorPage from './pages/EditorPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SamplePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Route>
    </Routes>
  )
}

export default App

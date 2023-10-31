import { Route, Routes } from 'react-router-dom'
import SamplePage from './pages/SamplePage'
import './App.css'
import Layout from './layout/Layout'
import CardLayout from './layout/CardLayout'
import EditorPage from './pages/EditorPage'
import AppViewPage from './pages/AppViewPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Route>
      <Route element={<CardLayout />}>
      <Route path="/card/:url" element={<AppViewPage />}/>
      </Route>
    </Routes>
  )
}

export default App

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'lib-flexible/flexible'
import {
    BrowserRouter as Router
} from 'react-router-dom'
// import Index from './views/Index/index.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
        <App />
    </Router>
    ,
    )

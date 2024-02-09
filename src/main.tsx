import ReactDOM from 'react-dom'
import App from './App.tsx'
import "bootstrap/scss/bootstrap.scss";
import "./assets/style.scss"
import { ThemProvider } from './context/context.tsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </ThemProvider>

)

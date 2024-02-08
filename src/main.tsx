import ReactDOM from 'react-dom'
import App from './App.tsx'
import "bootstrap/scss/bootstrap.scss";
import "./assets/style.scss"
import { ThemProvider } from './context/context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemProvider>
        <App />
    </ThemProvider>

)

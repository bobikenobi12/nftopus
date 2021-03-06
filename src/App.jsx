import { Install } from './components/Install'
import { Home } from './components/Home'
import './App.css';
// ако потребителят има акаунт в metamask да се рендерне home страницата, иначе да се рендерне install страницата
function App() {
  if(window.ethereum) {
    return <Home/>
  }else {
    return <Install/>
  }
}

export default App

import './App.css';
import Header from "./Components/header/Header";
import Skill from "./Components/skill/Skill";
import Project from "./Components/project/Project";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";
import {ViewportProvider} from './ViewportContext'

function App() {
    return (
        <ViewportProvider>
            <Header/>
            <Skill/>
            <Project/>
            <About/>
            <Footer/>
        </ViewportProvider>
    );
}

export default App;

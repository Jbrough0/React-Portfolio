import './App.css';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Header from './Components/Header.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import resumeData from './data/ResumeData.json';
function App() {
  return (
    <div className = "Component"> 
    <About></About>
    {resumeData.map((data) =>(<Portfolio name={data.name} imgurl={data.imgurl} />))}
    <Header></Header>
    <Contact></Contact>
    <Footer></Footer>

    </div>
  );
}

export default App;

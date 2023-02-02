import Question from './Question';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import Tab from './Tab';
import '../css/mainPage.css';

let MainPage = () => {


    const movePage = useNavigate();

    function login() {
        movePage('/Login');
    }

    return (
        <div className='mainPage' >
            <button onClick={login} >login</button>

            <Tab></Tab>
          
        </div>
    );

}

export default MainPage;
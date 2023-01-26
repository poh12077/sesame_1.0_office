import Question from './Question';
import '../style.css';
import { useNavigate } from 'react-router-dom';


let MainPage = () => {

    let questionList = [1, 2, 3, 4];

    const movePage = useNavigate();

    function login(){
       movePage('/Login');
     }

        return (
            <div>
                <button onClick={login} >login</button>
                {questionList.map(
                (questionNum) =>
                    <div className='question' >
                        <Question key={questionNum} questionNum={questionNum} ></Question>
                        <br /><br /><br />
                    </div>
            )}
            </div>
        );

}

export default MainPage;
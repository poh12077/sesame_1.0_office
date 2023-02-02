import { useState } from "react";
import "../css/tab.css";
import Question from "./Question";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    let questionList = [1, 2, 3, 4];
    let tabName=['love', 'marriage'];
    return (
        <div className="tabContainer">

            <div className="tabMenu">
                <button
                    className={toggleState === 1 ? "tab activeTab" : "tab"}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </button>
                <button
                    className={toggleState === 2 ? "tab activeTab" : "tab"}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
                <button
                    className={toggleState === 3 ? "tab activeTab" : "tab"}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </button>
            </div>

            <div className="tabContentWrapper">
                <div className={toggleState === 1 ? "tabContent  activeTabcontent" : "tabContent"}   >
                    {questionList.map(
                        (questionNum) =>
                            <div  >
                                <Question key={questionNum} questionNum={questionNum} tabName={tabName[0]} ></Question>
                                <br /><br /><br />
                            </div>
                    )}
                </div>

                <div className={toggleState === 2 ? "tabContent  activeTabcontent" : "tabContent"}   >
                {questionList.map(
                        (questionNum) =>
                            <div  >
                                <Question key={questionNum} questionNum={questionNum} tabName={tabName[1]} ></Question>
                                <br /><br /><br />
                            </div>
                    )}
                </div>

                <div className={toggleState === 3 ? "tabContent  activeTabcontent" : "tabContent"}     >
                    <p>
                        cccc
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Tabs;

import { useState } from "react";
import "../css/tab.css";
import Question from "./Question";

function Tabs() {
    const [tabNum, setTabNum] = useState(0);

    let questionList = [0, 1, 2, 3, 4];
    let loveTab=['aa','bb','cc','dd','ee'];
    let marriageTab=['ff','g','h','dd','ee'];
    let questionStatement=[loveTab, marriageTab];
    let tabName=['love', 'marriage'];
    let options = [
        { num: 'optionOne', statement: "option1" },
        { num: 'optionTwo', statement: "option2" },
        { num: 'optionThree', statement: "option3" },
        { num: 'optionFour', statement: "option4" }
      ];

    return (
        <div className="tabContainer">

            <div className="tabMenu">
                <button
                    className={tabNum === 0 ? "tab activeTab" : "tab"}
                    onClick={() => setTabNum(0)}
                >
                    Tab 1
                </button>
                <button
                    className={tabNum === 1 ? "tab activeTab" : "tab"}
                    onClick={() => setTabNum(1)}
                >
                    Tab 2
                </button>
                <button
                    className={tabNum === 2 ? "tab activeTab" : "tab"}
                    onClick={() => setTabNum(2)}
                >
                    Tab 3
                </button>
            </div>

            <div className="tabContentWrapper">
                <div className={tabNum === 0 ? "tabContent  activeTabcontent" : "tabContent"}   >
                    {questionList.map(
                        (questionNum) =>
                            <div  >
                                <Question key={questionNum} questionNum={questionNum} tabName={tabName[tabNum]} questionStatement={questionStatement[tabNum][questionNum]} options={options} ></Question>
                                <br /><br /><br />
                            </div>
                    )}
                </div>

                <div className={tabNum === 1 ? "tabContent  activeTabcontent" : "tabContent"}   >
                {questionList.map(
                        (questionNum) =>
                            <div  >
                                <Question key={questionNum} questionNum={questionNum} tabName={tabName[tabNum]} questionStatement={questionStatement[tabNum][questionNum]} options={options} ></Question>
                                <br /><br /><br />
                            </div>
                    )}
                </div>

                <div className={tabNum === 2 ? "tabContent  activeTabcontent" : "tabContent"}     >
                    <p>
                        cccc
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Tabs;

import symptoms from "../data/Symptoms";
import Modal from 'react-modal'
import { useState } from "react";
Modal.setAppElement('#root');
var diagnosis = "hello";

const DiseasePrediction = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isloading, setIsloading] = useState(false)
    function GetData() {
        setIsloading(true)
        var checkboxes = document.getElementsByTagName("input");
        var result = [];

        for (var i = 1; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result.push(1);
                // console.log("1")
            } else {
                result.push(0);
                // console.log("0")
            }
        }
        let person = {
            symptoms: [result],
        };
        console.log(person);

        fetch("http://127.0.0.1:2000/", {
            method: "POST",
            body: JSON.stringify({
                symptoms: result,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " + response.status
                    );
                    return;
                }

                console.log(response.headers.get("Content-Type"));
                return response.json();
            })
            .then((myJson) => {
                console.log(JSON.stringify(myJson));
                // alert("You might have :" + myJson.disease);
                diagnosis = myJson.disease;
                setIsloading(false)
                setModalIsOpen(true)
            })
            .catch((err) => {
                console.log("Fetch Error :-S", err);
            });

    }
    return (
        <>






            <div className="m-5 p-5 text-2xl">
                <h1>Please select any Symptoms you might have:</h1>
            </div>

            <div className="p-5 m-5">
                <div className="">

                    <div >

                        <table className="" >
                            <thead>
                                <tr className="">
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {symptoms.map((total) => {
                                    return (
                                        <tr className="even:bg-slate-200 odd:bg-slate-100 text-black ">
                                            <td className="m-2"><input id="check" type="checkbox" className="m-2 w-7 h-7 rounded focus:bg-black" /></td>
                                            <td className="w-full"><div className="" id={total.id}>{total.str}</div></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="w-full flex justify-center ">
                            <button id="getData" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mt-5 p-5 rounded-2xl" onClick={GetData}>
                                GET DIAGNOSIS
                            </button>
                        </div>

                    </div>








                </div>
                <div className="flex flex-row  justify-center items-center">
                    <Modal className="justify-center items-center bg-slate-100 w-fit h-fit mt-20 mr-auto ml-auto border-solid border-2 border-black pl-20 pr-20 pt-5 pb-5  rounded-2xl" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <div> <h1 className="font-bold">You may have</h1></div>
                        <div><h2 className="text-2xl font-bold">{diagnosis}</h2></div>
                        <div><p className="text-red-500 font-bold">NOTE :This is predicted using an AI</p></div>
                        <div><p className="text-red-500 font-bold">Please contact a health professional</p></div>
                        <div><button className="bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mt-5 p-5 rounded-2xl" onClick={() => setModalIsOpen(false)}>Close</button></div>

                    </Modal>
                    <div className="flex flex-row  justify-center items-center">
                    <Modal className="justify-center items-center mt-20 mr-auto ml-auto h-fit w-fit bg-slate" isOpen={isloading} onRequestClose={() => isloading(false)}>
                    <div class="">
                        <div class="flex justify-center items-center w-20 h-20 overflow-hidden">
                            <img class="h-20 w-20" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""></img>
                        </div>
                    </div>
                    </Modal>
                    </div>
                    
                
                </div>
            </div>
        </>
    )
}

export default DiseasePrediction
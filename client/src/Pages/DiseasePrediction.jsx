import symptoms from "../data/Symptoms";
import Modal from 'react-modal'
import { useState } from "react";
Modal.setAppElement('#root');//for accesibility
var diagnosis = "NULL"; // default value

const DiseasePrediction = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)// to track state of disease model
    const [isloading, setIsloading] = useState(false)// to track state of loading model
    function GetData() {
        setIsloading(true)//loading screen starts rendering
        var checkboxes = document.getElementsByTagName("input");//get all checkboxes from DOM
        var result = [];

        for (var i = 1; i < checkboxes.length; i++) {//Loop through all the checkboxes
            if (checkboxes[i].checked) {//push 1 if checked
                result.push(1);
            } else {
                result.push(0);//push 0 if not checked
            }
        }
        let person = {//declaring the body to send to API
            symptoms: [result],
        };
        console.log(person);

        fetch("http://127.0.0.1:2000/", {//API call
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
                diagnosis = myJson.disease;
                setIsloading(false)//loading screen stops rendering
                setModalIsOpen(true)//diagnosis model starts rendering
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
                                {symptoms.map((total) => {//mapping data from symptoms
                                    return (
                                        <tr key={total.id} className="even:bg-slate-200 odd:bg-slate-100 text-black ">
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
                <div className="flex flex-row  justify-center items-center ">  
                    <Modal className=" bg-slate-100 flex flex-col w-fit h-fit mt-20 mr-auto ml-auto border-solid border-2 border-black pl-20 pr-20 pt-5 pb-5  rounded-2xl" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <div className="flex justify-center items-center"> <h1 className="font-bold">You may have</h1></div>
                        <div className="flex justify-center items-center"><h2 className="text-2xl font-bold">{diagnosis}</h2></div>
                        <br />
                        <div className="flex justify-center items-center"><p className="text-red-500 font-bold">NOTE :This is predicted using an AI</p></div>
                        <div className="flex justify-center items-center"><p className="text-red-500 font-bold">Please contact a health professional</p></div>
                        <div className=" flex justify-center items-center"><button className="text-white border-solid border-2 border-black font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mt-5 p-5 rounded-2xl" onClick={() => setModalIsOpen(false)}>Close</button></div>

                    </Modal>
                    <div className="flex flex-row  justify-center items-center">
                        <Modal className="justify-center items-center mt-20 mr-auto ml-auto h-fit w-fit bg-slate" isOpen={isloading} onRequestClose={() => isloading(false)}>
                            <div class="">
                                <div class="flex justify-center items-center w-20 h-20 overflow-hidden">
                                    <img class="h-20 w-20" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="Loading.."></img>
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
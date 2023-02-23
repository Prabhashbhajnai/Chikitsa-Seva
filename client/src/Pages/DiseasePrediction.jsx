import symptoms from "../data/Symptoms";


function GetData() {
    var checkboxes = document.getElementsByID("check");
    var result = [];

    for (var i = 0; i < checkboxes.length; i++) {
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
            alert("You might have :" + myJson.disease);
        })
        .catch((err) => {
            console.log("Fetch Error :-S", err);
        });
}

function GetCheck() {
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
}


const DiseasePrediction = () => {
    return (
        <>
            <div className="content-center">
                <div className="App">
                    <h1>Please select any Symptoms you might have:</h1>
                    <div >
                        <h1 className="text-centre">Symptoms</h1>
                        <table >
                            <thead>
                                <tr className="">
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {symptoms.map((total) => {
                                    return (
                                        <tr className="even:bg-slate-200 odd:bg-gray-400 text-black hover:bg-green-600">
                                            <td className="m-2"><input id="check" type="checkbox" className="m-2 w-7 h-7 rounded focus:bg-black" /></td>
                                            <td className="w-full"><div className="" id={total.id}>{total.str}</div></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <button id="getData" className="bg-indigo-500  p-5 rounded-xl mt-5 " onClick={GetCheck}>
                            GET DIAGNOSIS
                        </button>
                    </div>








                </div>
            </div>
        </>
    )
}

export default DiseasePrediction
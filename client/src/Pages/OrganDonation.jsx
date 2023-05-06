
function OrganDonation() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [medication, setMedication] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Date of birth: ${dob}`);
    console.log(`Phone number: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Medication: ${medication}`);
    console.log(`Address: ${address}`);
  };

  return (
            <div className="form-container">
              <h1 className="text-4xl font-bold mb-8 text-center">Organ Donation Form</h1>
              <div className="image-container mb-8 flex justify-center">
                <img
                  src="https://t3.ftcdn.net/jpg/01/70/23/78/240_F_170237839_dbHJ3f0XRzdE2lBqawHRVpajlnCxw4AP.jpg"
                  alt="Organ Donation"
                  className="h-48"
                />
              </div>
              <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg">
                <div className="form-group mb-6">
                  <label htmlFor="name" className="font-bold mb-2 block">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-400 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="age" className="font-bold mb-2 block">
                    Age:
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-400 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="dob" className="font-bold mb-2 block">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-400 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="phone" className="font-bold mb-2 block">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-400 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="email" className="font-bold mb-2 block">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border border-gray-400 rounded-lg"
        />
        </div>
        <div className="form-group mb-6">
        <label htmlFor="medication" className="font-bold mb-2 block">
        Medication:
        </label>
        <textarea
        id="medication"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
        required
        className="w-full p-2 border border-gray-400 rounded-lg"
        />
        </div>
        <div className="form-group mb-6">
        <label htmlFor="address" className="font-bold mb-2 block">
        Address:
        </label>
        <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="w-full p-2 border border-gray-400 rounded-lg"
        />
        </div>
        <div className="form-group text-center">
        <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
        Submit
        </button>
        </div>
        </form>
        </div>
        );
        }

export default OrganDonation;

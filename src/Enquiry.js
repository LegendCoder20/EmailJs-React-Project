import {useState, useRef} from "react";
import emailjs from "@emailjs/browser";

function Enquiry() {
  const rName = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const hName = (e) => {
    setName(e.target.value);
  };

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hPhone = (e) => {
    setPhone(e.target.value);
  };

  const hQuery = (e) => {
    setQuery(e.target.value);
  };

  const send = (e) => {
    e.preventDefault();
    let data = {name: name, email: email, phone: phone, query: query};
    emailjs
      .send("legend", "template_r862q6j", data, "oIzrqXv28iYKjToUc")
      .then((res) => {
        alert("Thankyou for your Feedback.");
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
        rName.current.focus();
      })
      .catch((err) => console.log("Issue" + err));
  };
  return (
    <>
      <div className="form-box">
        <form onSubmit={send}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={hName}
            value={name}
            ref={rName}
          />
          <br />
          <label htmlFor="E-mail">E-mail</label>
          <input
            type="text"
            placeholder="Enter your E-mail"
            onChange={hEmail}
            value={email}
          />
          <br />
          <label htmlFor="Phone">Phone-Number</label>
          <input
            type="number"
            placeholder="Enter your Phone Number"
            onChange={hPhone}
            value={phone}
          />
          <br />

          <label htmlFor="Query">Query</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter your Query"
            onChange={hQuery}
            value={query}
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Enquiry;

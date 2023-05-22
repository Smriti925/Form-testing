// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isvisible: true,
    mode: "",
    favfruit: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target; //extract all props of element which is selected/changed
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("All Done");
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type=" text"
          name="firstName"
          placeholder="First Name"
          onChange={changeHandler}
          value={formData.firstName} //state maintain, controlled components
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="comments"
          placeholder="enter queries"
          onChange={changeHandler}
          value={formData.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="isvisible"
          onChange={changeHandler}
          checked={formData.isvisible} //value=checked
          id="isvisible"
        />
        <label htmlFor="isvisible">Am I visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Choose Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online">Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode" //change diff name agr multple select krne h
            value="Offline-Mode"
            id="Offline"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline">Offline Mode</label>
        </fieldset>
        <br />
        <br />
        <select
          name="favfruit"
          id="favfruit"
          value={formData.favfruit}
          onChange={changeHandler}
        >
          <option value="Apple">Apple</option>
          <option value="Mango">Mango</option>
          <option value="Banana">Banana</option>
          <option value="Grapes">Grapes</option>
        </select>
        <br />
        <br />
        {/* don't use onClick, use onSubmit(in form tag) whenever we use button within form */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;

import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// redux toolkit and useNavigate later
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);

  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {!values.isMember && (
          <>
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
          </>
        )}
        {/* disabled={isLoading} */}
        <button type="submit" className="btn btn-block">
          {/* {isLoading ? "loading..." : "submit"} */}
          Submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;

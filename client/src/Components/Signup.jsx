import { useState } from "react";
import { postSignup } from "../kv";
import { message } from "antd";
import { useNavigate } from "react-router-dom"

export default function Signup() {

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const success = (text) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };
  const error = (text) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };
  const warning = (text) => {
    messageApi.open({
      type: 'warning',
      content: text,
    });
  };

  const [auth, setAuth] = useState({
    name: null,
    email: null,
    password: null,
    cpassword: null
  });

  const handelInput = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  }

  const handelPassword = (password, cpassword) => {
    if (password.length != 8) {
      warning("password must be 8 characters");
      return false;
    }
    if (password != cpassword) {
      warning("password and confirm password are not same")
      return false;
    }
    
    return true;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    let { name, email, password, cpassword } = auth;

    if (handelPassword(password, cpassword)) {
      //payload
      let data = {
        "name": name,
        "email": email,
        "password": password,
      };
      // options
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      }

      let res = await fetch(postSignup, options);
      let output = await res.json();

      if (output.status) {
        success("Login Sucess, Wait!")
        localStorage.setItem("TOKEN", output.token);
        navigate("../")
      }
      else {
        error(output.msg);
      }
    }

  }

  return (
    <>
      {contextHolder}
      <div className="p-8 h-screen w-full flex justify-center">
        <div className="flex rounded-md p-4 h-full w-[60%] shadow-2xl">
          <div className="flex flex-col rounded-md justify-between p-8 bg-primary-500 dark:bg-primary-600 w-full">
            <img src="" alt=".logo" />
            <div className="flex flex-col text-white">
              <h2>something</h2>
              <p className="text-body-1">something about it</p>
            </div>
            <div className="flex flex-col justify-center p-4 rounded-lg bg-primary-700 text-gray-300">
              <p className="text-body-2">
                someone said something and i like it for some reason
              </p>
              <div className="flex gap-2 mt-2">
                <img src="" alt="person" />
                <div className="flex flex-col gap-1">
                  <p className="text-body-2">his name</p>
                  <p className="text-caption">he is great</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form flex flex-col justify-center item-start w-full">
            <div className="pb-10">
              <h4>Signup</h4>
              <p className="text-body-1">
                Already have a acount ? <a href="signup">Login</a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
            <div className="flex flex-col">
                <label htmlFor="email" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  onChange={handelInput}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  onChange={handelInput}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={handelInput}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  id="cpassword"
                  placeholder="confirm password"
                  onChange={handelInput}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mt-10" onClick={handelSubmit}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

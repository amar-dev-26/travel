import React, { useState } from "react";
import "./Sign.css";
import { adminRegisterApi } from "../services/Allapi";

function Sign() {
  const [inputs, setInputs] = useState({
    uname: "",
    psw: "",
    email: "",
    conpsw: "",
  });

  const getInputs = (e) => {
    //destrcture
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);

  const handleSubmit = async () => {


    const result = await adminRegisterApi(inputs);

    console.log(result);
  };

  return (
    <div>
      <section className=" signup ">
        <div className="mask d-flex align-items-center h-80">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    height: "40rem",
                    backgroundColor: "black",
                  }}
                >
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center text-white mb-5">
                      Create your account
                    </h2>

                    <form>
                      <div className="form-outline mb-3">
                        <input
                          type="text"
                          name="uname"
                          onChange={(e) => getInputs(e)}
                          className="form-control  form-control-lg"
                        />
                        <label className="form-label text-white">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => getInputs(e)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label text-white">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          name="psw"
                          onChange={(e) => getInputs(e)}
                          className="form-control form-control-lg "
                        />
                        <label className="form-label text-white">
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-3">
                        <input
                          type="password"
                          name="conpsw"
                          onChange={(e) => getInputs(e)}
                          className="form-control form-control-lg "
                        />
                        <label className="form-label text-white">
                          Repeat your password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="btn btn-dark text-white text-light"
                        >
                          REGISTER
                        </button>
                      </div>

                      <p className="text-center text-secondary mt-3 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold  text-white">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sign;

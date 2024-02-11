export default function Login() {

  const [auth, setAuth] = useState({
    username: null,
    password: null,
  });

  const handelInput = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  }

  return (
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
            <h4>Login</h4>
            <p className="text-body-1">
              Don't have a acount ? <a href="signup">Sign up</a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
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
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-10">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

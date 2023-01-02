import { useState } from "react";
import useUrl from "./useUrl";

const Register = ({}) => {
  const [name, setName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [data ,handelApi] = useUrl("baseurl");

  return (
    <>
      {isRegistered ? (
        <>
          <input type="text" name="" id="" value={name} />
          <input type="password" name="" id="" value={password} />
          <button>Log In</button>
          <div>
            Not registered ?{" "}
            <button onClick={() => {setIsRegistered(false);
            }}>Sign up </button>{" "}
          </div>                     
        </>
      ) : (
        <>
          <input type="text" name="" id="" value={firstName} />
          <input type="text" name="" id="" value={lastName} />
          <input type="text" name="" id="" value={email} />
          <input type="password" name="" id="" value={password} />
          <button>Sign Up</button>
        </>
      )}
    </>
  );
};

export default Register;

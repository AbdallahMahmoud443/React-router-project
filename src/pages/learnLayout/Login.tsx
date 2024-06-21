import { useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
const Login = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Email address" />
        <Input placeholder="Password" />

        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
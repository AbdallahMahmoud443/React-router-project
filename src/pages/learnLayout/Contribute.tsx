import { useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import Textarea from "../../ui/TextArea";

const Contribute = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      {/* {state?.email ? (
        <h2 className="text-center mb-3">Email:{state?.email}</h2>
      ) : null} */}
      <h2 className="text-center mb-3">Email:{state.email}</h2>
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Textarea />
        <Button>Submit new issue</Button>
      </form>
    </>
  );
};

export default Contribute;

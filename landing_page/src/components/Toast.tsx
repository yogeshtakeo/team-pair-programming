import toast, { Toaster } from "react-hot-toast";
import { FiMessageCircle } from "react-icons/fi";
const notify = () => toast("Need Help?");
function Toast() {
  return (
    <div>
      <FiMessageCircle className=" text-3xl ml-5" onClick={notify} />

      <Toaster />
    </div>
  );
}

export default Toast;

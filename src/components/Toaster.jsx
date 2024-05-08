import { BadgeCheck, OctagonAlert } from "lucide-react";

const Toaster = ({ alertStatus, alertMessage }) => {
  return (
    <div
      className={`${
        alertStatus === "danger" ? "bg-red-200" : "bg-green-200"
      } p-4 rounded-md flex gap-2`}
    >
      {alertStatus === "danger" ? <OctagonAlert /> : <BadgeCheck />}
      {alertMessage}
    </div>
  );
};

export default Toaster;

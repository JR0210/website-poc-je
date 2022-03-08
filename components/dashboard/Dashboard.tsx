import { useAppContext } from "../../context/state";
import { MdArrowRightAlt } from "react-icons/md";

export default function Dashboard() {
  const { toggleDashboard, dashboardOpen } = useAppContext();

  function handleCloseDashboard() {
    toggleDashboard(false);
  }

  return (
    <aside
      className={`fixed overflow-y-auto transition-right duration-500 ease-in-out ${
        dashboardOpen ? "right-1/3" : "-right-2/3"
      } w-2/3 top-0 h-full bg-primary-50 z-10`}
    >
      <div className="w-full h-full px-48 py-14 flex flex-col">
        <MdArrowRightAlt
          onClick={handleCloseDashboard}
          className="h-8 w-8 text-black cursor-pointer mb-4"
        />

        <h1 className="text-gray flex flex-col font-bold">
          Hello,{" "}
          <span className="font-black text-text-2 text-3xl">
            Margaret Atwood
          </span>
        </h1>
        <div className="mt-14 w-full h-full bg-white"></div>
      </div>
    </aside>
  );
}

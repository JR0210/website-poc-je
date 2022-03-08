import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Dashboard />
      {children}
    </>
  );
}

import Sidebar from "../sidebar/Sidebar";

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}
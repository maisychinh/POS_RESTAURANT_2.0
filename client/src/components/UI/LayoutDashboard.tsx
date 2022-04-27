import Sidebar  from "../Sidebar/Sidebar";
const Layout:React.FC = (props) => {
  return <div className="flex flex-row">
      <Sidebar />
      <div className="w-full" style={{backgroundColor:"#f9fafb"}}>
        {props.children}
      </div>
  </div>;
};
export default Layout;

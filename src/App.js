import "./App.css";
import Parent from "./component/child_parent/Parent";
// import Header from './component/routing/Header';
// import Carosel from './component/carosel/Carosel';
// import Empty from './component/empty/Empty';
// import Condition from './component/conditin/Condition';
import CondtionTimer from "./component/conditin/CondtionTimer";
import Search from "./component/search/Search";
import TableValidation from "./component/table/TableValidation";
import Tables from "./component/table/Tables";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import SimpleDashbord from "./component/dashbord/Delete_&_Edit/SimpleDashbord";
import Home from "./component/dashbord/CRUD_with_JSON/Home";
import AppRouter from "./component/dashbord/CRUD_with_JSON/AppRouter";
 
function App() {
  return (
    <div className="App">
      {/* <Header/> */}

      {/* <Empty/> */}
      {/* <Condition/> */}
      {/* <Tables/> */}
      {/* <TableValidation/> */}
      {/* <Parent/> */}
      {/* <Search /> */}
     {/* <SimpleDashbord/> */}
     <AppRouter/>
    </div>
  );
}

export default App;

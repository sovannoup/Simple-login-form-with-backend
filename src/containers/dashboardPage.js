import { connect } from "react-redux";
import DashboardComponent from "../screens/dashboardPage";
import { userLogout } from "../modules/user/reducer";
import {
  getMenuAdmin, getMenuAdminPage, addMenuAdmin, updateMenuAdmin, deleteMenuAdmin, getUser, 
  addUser, updateUser, deleteUser, getUserPermission, updatePermission, 
  getSiteDescription, updateSiteDescription
} from "../modules/dashboard/reducer";

const mapStateToProps = state => ({
    ...state,
  });
const mapDispatchToProps = {
  getMenuAdmin, getMenuAdminPage, addMenuAdmin, updateMenuAdmin, deleteMenuAdmin, getUser, 
  addUser, updateUser, deleteUser, getUserPermission, updatePermission, userLogout, 
  getSiteDescription, updateSiteDescription
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardComponent);
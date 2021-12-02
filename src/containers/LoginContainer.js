import { connect } from "react-redux";
import LoginComponent from "../screens/Login"
import { userLogin } from "../modules/user/reducer"

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  userLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

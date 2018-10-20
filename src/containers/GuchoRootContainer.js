import { connect } from "react-redux";
import GuchoRoot from "../components/GuchoRoot";

const mapStateToProps = state => {
  console.log(state.ui.redirect);
  return {
    redirect: state.ui.redirect
  };
};

const GuchoRootContainer = connect(
  mapStateToProps,
  null
)(GuchoRoot);

export default GuchoRootContainer;

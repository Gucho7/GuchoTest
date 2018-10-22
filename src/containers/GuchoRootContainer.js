import { connect } from "react-redux";
import { resetRedirect } from "../actions/Ui";
import GuchoRoot from "../components/GuchoRoot";

const mapStateToProps = state => {
  return {
    redirect: state.ui.redirect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetRedirect: () => {
      dispatch(resetRedirect());
    }
  };
};

const GuchoRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuchoRoot);

export default GuchoRootContainer;

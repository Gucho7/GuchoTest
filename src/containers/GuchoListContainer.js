import { connect } from "react-redux";
import { addGuchoView } from "../actions/Ui";
import GuchoList from "../components/GuchoList";

const mapStateToProps = state => {
  return {
    guchos: state.guchos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAddGucho: () => {
      dispatch(addGuchoView());
    }
  };
};

const GuchoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuchoList);

export default GuchoListContainer;

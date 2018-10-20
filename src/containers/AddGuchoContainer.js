import { connect } from "react-redux";
import AddGucho from "../components/AddGucho";
import { addGuchoAction } from "../actions/Guchos";

const mapDispatchToProps = dispatch => {
  return {
    onAddGucho: guchoText => {
      dispatch(addGuchoAction(guchoText));
    }
  };
};

const AddGuchoContainer = connect(
  null,
  mapDispatchToProps
)(AddGucho);

export default AddGuchoContainer;

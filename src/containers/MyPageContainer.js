import { connect } from "react-redux";
import MyPage from "../components/MyPage";

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPage);

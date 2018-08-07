import { connect } from "react-redux";
import PressButton from "../components/PressButton";
import { db } from "../firebase";

const mapStateToProps = state => ({user: state.auth});

const mapDispatchToProps = dispatch => ({
  pushButton: uid => {
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const stampDocRef = db.collection("stamps").doc(uid)
                          .collection("data").doc(date);
    stampDocRef.set({
      time: null,
      valid: false,
    }).catch(error => {
      console.error("Error: ", error);
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PressButton);

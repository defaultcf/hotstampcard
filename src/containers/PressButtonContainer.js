import { connect } from "react-redux";
import PressButton from "../components/PressButton";
import { db } from "../firebase";

const mapStateToProps = state => ({user: state.auth});

const mapDispatchToProps = dispatch => ({
  pushButton: uid => {
    const stampDocRef = db.collection("stamps").doc(uid).collection("data");
    stampDocRef.add({
      time: "aaa",
      valid: "bbb",
    }).then(docRef => {
      console.log("docRef Id: ", docRef.id);
    }).catch(error => {
      console.error("Error: ", error);
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PressButton);

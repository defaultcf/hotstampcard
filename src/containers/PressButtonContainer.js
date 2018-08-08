import { connect } from "react-redux";
import PressButton from "../components/PressButton";
import { db } from "../firebase";

const mapStateToProps = state => ({user: state.auth});

const mapDispatchToProps = dispatch => ({
  pushButton: user => {
    db.collection("stamps").doc(user.uid).set({
      name: user.displayName,
      uid: user.uid,
      img: user.img,
    }, { merge: true });
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const stampDocRef = db.collection("stamps").doc(user.uid)
                          .collection("data").doc(date);
    stampDocRef.set({
      time: null,
      valid: false,
    }).catch(error => {
      alert("今日の分は押されています！");
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PressButton);

import { connect } from "react-redux";
import moment from "moment";
import PressButton from "../components/PressButton";
import { db } from "../firebase";
import { didPushToday } from "../actions/stamps";

const mapStateToProps = state => ({
  user: state.auth,
  pushToday: state.stamps.pushToday,
});

const mapDispatchToProps = dispatch => ({
  checkPushToday: user => {
    const start = moment().set("hour", 0)
                          .set("minute", 0)
                          .set("second", 0);
    const end = moment().add(1, "day")
                        .set("hour", 0)
                        .set("minute", 0)
                        .set("second", 0);
    db.collection("stamps").doc(user.uid)
      .collection("data")
      .where("time", ">=", start.toDate())
      .where("time", "<", end.toDate()).get()
      .then(snapshot => {
        if(snapshot.size === 1) {
          dispatch(didPushToday(true));
        }
      });
  },
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

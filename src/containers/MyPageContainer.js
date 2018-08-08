import { connect } from "react-redux";
import { db } from "../firebase";
import { myStamps } from "../actions/stamps";
import MyPage from "../components/MyPage";

const mapStateToProps = state => ({
  user: state.auth,
  stamps: state.stamps.my,
});

const mapDispatchToProps = dispatch => ({
  getMyStamp: user => {
    db.collection("stamps").doc(user.uid)
      .collection("data").where("valid", "==", true)
      .onSnapshot(querySnapshot => {
        let stamps = [], i = 0;
        querySnapshot.forEach(doc => {
          i++;
          stamps.push({
            id: i,
            title: "日野",
            allDay: true,
            start: doc.data().time.toDate(),
            end: doc.data().time.toDate(),
          });
        });
        dispatch(myStamps(stamps));
      });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPage);

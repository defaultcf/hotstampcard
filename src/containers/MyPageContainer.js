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
        let stamps = [];
        querySnapshot.forEach(doc => {
          stamps.push(doc.data().time);
        });
        dispatch(myStamps(stamps));
      });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPage);

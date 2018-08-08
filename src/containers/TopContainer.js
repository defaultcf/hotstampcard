import { connect } from "react-redux";
import { db } from "../firebase";
import { allStamps } from "../actions/stamps";
import Top from "../components/Top";

const mapStateToProps = state => {
  return {
    all: state.stamps.all,
  }
};

const mapDispatchToProps = dispatch => ({
  getAllStamp: all => {
    db.collection("stamps")
    .onSnapshot(querySnapshot => {
      let stamps = new Array(0);
      querySnapshot.forEach(doc => {
        const name = doc.data().name;
        const uid = doc.data().uid;
        doc.ref.collection("data")
        .onSnapshot(subQuerySnapshot => {
          subQuerySnapshot.forEach(subDoc => {
            const data = subDoc.data();
            stamps.push({
              title: name,
              allDay: true,
              start: data.time.toDate(),
              end: data.time.toDate(),
            });
          });
          const newStamps = stamps.filter((x, i, self) => {
            return self.indexOf(x) === i
          });
          newStamps.forEach(stamp => {
            const test_arr = all.filter(v => {
              return v.title === stamp.title && v.start.toString() === stamp.start.toString()
            });
            if (test_arr.length === 0) dispatch(allStamps(uid, stamp))
          });
        });
      });
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Top)

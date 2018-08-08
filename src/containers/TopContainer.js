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
      let stamps = new Array(0), i = 0;
      querySnapshot.forEach(doc => {
        const name = doc.data().name;
        const uid = doc.data().uid;
        doc.ref.collection("data")
        .onSnapshot(subQuerySnapshot => {
          subQuerySnapshot.forEach(subDoc => {
            i++;
            const data = subDoc.data();
            stamps.push({
              title: name,
              allDay: true,
              start: data.time,
              end: data.time,
            });
          });
          const newStamps = stamps.filter((x, i, self) => {
            return self.indexOf(x) === i
          });
          newStamps.map(stamp => {
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

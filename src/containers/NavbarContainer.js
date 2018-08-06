import { connect } from "react-redux";
import firebase from "../firebase";
import Navbar from "../components/Navbar";
import { loginOk, logout } from "../actions";

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
  doLogin: () => {
    let provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  refLogin: () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) dispatch(logout());
      else dispatch(loginOk(user));
    })
  },
  logout: () => {
    firebase.auth().signOut();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

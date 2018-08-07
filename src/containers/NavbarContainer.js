import { connect } from "react-redux";
import { firebaseApp } from "../firebase";
import Navbar from "../components/Navbar";
import { loginOk, logout } from "../actions";

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
  doLogin: () => {
    let provider = new firebaseApp.auth.TwitterAuthProvider();
    firebaseApp.auth().signInWithPopup(provider);
  },
  refLogin: () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (!user) dispatch(logout());
      else dispatch(loginOk(user));
    })
  },
  logout: () => {
    firebaseApp.auth().signOut();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

const ALL_STAMPS = "ALL_STAMPS";
const MY_STAMPS = "MY_STAMPS";
const PUSH_TODAY = "PUSH_TODAY";

export const allStamps = (uid, stamp) => ({
  type: ALL_STAMPS,
  payload: {
    uid,
    stamp,
  },
});

export const myStamps = stamps => ({
  type: MY_STAMPS,
  payload: {
    stamps,
  },
});

export const didPushToday = bool => ({
  type: PUSH_TODAY,
  payload: {
    bool,
  },
});

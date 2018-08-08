const ALL_STAMPS = "ALL_STAMPS";
const MY_STAMPS = "MY_STAMPS";

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

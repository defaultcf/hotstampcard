const MY_STAMPS = "MY_STAMPS";

export const myStamps = stamps => ({
  type: MY_STAMPS,
  payload: {
    stamps,
  },
});

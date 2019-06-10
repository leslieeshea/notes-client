// eventually will call back end
export const createNote = note => {
  return Promise.resolve({
    _id: '12345',
    ...note
  });
};

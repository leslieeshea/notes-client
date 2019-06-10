import { NEW_NOTE_PENDING } from '../actions/notesActions';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
  }
}

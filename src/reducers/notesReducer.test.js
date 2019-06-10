import reducer from './notesReducer';
import { newNote, NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

describe('Notes reducer', () => {
  it('handles the NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
});

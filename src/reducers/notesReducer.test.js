import reducer from './notesReducer';
import { NEW_NOTE_PENDING, NEW_NOTE, FETCH_NOTES_PENDING } from '../actions/notesActions';

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

  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'hello there',
        body: 'goodbye'
      }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hello there', body: 'goodbye' }]
    });
  });

  it('handles the FETCH_NOTES_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
});

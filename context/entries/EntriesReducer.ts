import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesType =
  | { type: 'Entry - AddEntry'; payload: Entry }
  | { type: 'Entry - UpdateEntry'; payload: Entry }
  | { type: 'Entry - RefreshData', payload: Entry[] };

export const EntriesReducer = (
  state: EntriesState,
  action: EntriesType
): EntriesState => {
  switch (action.type) {
    case 'Entry - AddEntry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case 'Entry - UpdateEntry':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        }),
      };

    case 'Entry - RefreshData':
      return {
        ...state,
        entries: [...action.payload]
      }

    default:
      return state;
  }
};

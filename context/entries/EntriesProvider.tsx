import { FC, useReducer, useEffect } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, EntriesReducer } from './';
import { entriesApi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: React.ReactNode;
}

export const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })

    dispatch({
      type: 'Entry - AddEntry',
      payload: data,
    });
  };

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, { description: entry.description, status: entry.status})
      dispatch({
        type: 'Entry - UpdateEntry',
        payload: data
      })
    } catch (error){
      console.log(error)
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: 'Entry - RefreshData', payload: data})
  }

  useEffect(() => {
    refreshEntries()
  },[]);


  return (
    <EntriesContext.Provider
      value={{
        ...state,
        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

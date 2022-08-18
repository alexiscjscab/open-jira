export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus; // cambiar
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}


export const seedData: SeedData = {
  entries: [
    {
      description: 'demo 1',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'demo 2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'demo 3',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}
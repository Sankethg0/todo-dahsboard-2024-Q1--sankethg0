export interface ToDo {
    todo: string;
    priority: string;
    createdBy: string;
    createdAt: string;
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }

export interface TaskFeedProps {
    fetchedData: any;
}

export interface ChartsProps {
  fetchedData: any;
}

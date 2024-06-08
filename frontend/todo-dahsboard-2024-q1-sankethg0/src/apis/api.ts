import { ToDo } from "../types/filetypes";

const API_URL = 'https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do';

export const fetchToDos = async (): Promise<ToDo[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: ToDo[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch to-dos:', error);
    throw error;
  }
};

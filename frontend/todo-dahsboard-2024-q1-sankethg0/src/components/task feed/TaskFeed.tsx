import React, { useState } from 'react'
import { TaskFeedProps, ToDo } from '../../types/filetypes';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Red from '../../assests/red.svg';
import Blue from '../../assests/blue.svg';
import Yellow from '../../assests/yellow.svg';
import { formatDate } from '../../utils/changedateformat.utils';
import '../../styles/taskfeed.css'

const TaskFeed:React.FC <TaskFeedProps> = ({fetchedData}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tasksPerPage: number = 10;
 
  const indexOfLastTask: number = currentPage * tasksPerPage;
  const indexOfFirstTask: number = indexOfLastTask - tasksPerPage;
  const currentTasks: ToDo[] = fetchedData.slice(indexOfFirstTask, indexOfLastTask);

  const renderTasks = currentTasks.map((task: ToDo) => {
    let priorityIcon;
    switch (task.priority) {
      case 'HIGH':
        priorityIcon = Red;
        break;
      case 'MEDIUM':
        priorityIcon = Blue;
        break;
      case 'LOW':
        priorityIcon = Yellow;
        break;
      default:
        priorityIcon = null;
    }

    return (
      <div key={task.id} className="task">
      {priorityIcon && <img src={priorityIcon} alt={`${task.priority} priority`} />}
      <span>{task.todo}</span>
      <span>{task.completed ? "Done" : "In-progress"}</span>
      <span>{formatDate(task.createdAt)}</span>
    </div>
    );
  });


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className='task-tab'>
      <div className='container-header'>
        <span>Tasks</span>
      </div>
      <div className="task-list">
        {renderTasks}
      </div>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(fetchedData.length / tasksPerPage)}
            page={currentPage}
            onChange={handleChange}
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  )
}

export default TaskFeed
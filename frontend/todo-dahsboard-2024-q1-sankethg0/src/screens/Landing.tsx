import React, { useEffect, useState } from 'react'
import LeftNav from '../components/left nav/LeftNav'
import TopNav from '../components/top nav/TopNav'
import WelcomeBar from '../components/welcome bar/WelcomeBar'
import TaskFeed from '../components/task feed/TaskFeed'
import ActivityFeed from '../components/activity feed/ActivityFeed'
import Chart from '../components/chart/Chart'
import '../styles/index.css'
import { fetchToDos } from '../apis/api'
import { ToDo } from '../types/filetypes'

const Landing: React.FC = () => {
    const [fetchedData, setFetchedData] = useState<ToDo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchToDos();
            setFetchedData(data)
          } catch (error) {
            console.error("Error fetching todos:", error);
          }
        };
    
        fetchData();
      }, []);
    
  return (
    <div>
        <div className='left-nav'>
            <LeftNav />
        </div>
        <div className='top-nav'>
            <TopNav />
        </div>
        <div className='welcome-bar'>
            <WelcomeBar />
        </div>
        <div className='task-feed'>
            <TaskFeed fetchedData={fetchedData}/>
        </div>
        <div className='activity-feed'>
            <ActivityFeed />
        </div>
        <div className='chart'>
            <Chart fetchedData={fetchedData}/>
        </div>
    </div>
  )
}

export default Landing
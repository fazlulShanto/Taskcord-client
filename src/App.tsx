import React from 'react';
import './index.css';
import './App.css';

import TaskModal from './modals/TaskModal';

function App() {
  return (
    <div className="App h-screen bg-background dark">
      <h1 className='text-3xl font-bold'>Taskcord</h1>
      
      <TaskModal />
    </div>
  );
}

export default App;

/*

BUGS ---------------------------------------------------------------------------



TODO ---------------------------------------------------------------------------



IDEAS ---------------------------------------------------------------------------



*/
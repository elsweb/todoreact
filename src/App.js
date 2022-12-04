import './App.css';
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div class="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
        <div class="h-auto  w-96 bg-white rounded-lg p-4">
          <div class="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
            <p class="set_date">Thursday 28 May</p>
            <p class="set_time">8:00 AM</p>
          </div>
          <p class="text-xl font-semibold mt-2 text-[#063c76]">Tarefas</p>
          <TaskList></TaskList>
        </div>
      </div>
    </div>
  );
}

export default App;

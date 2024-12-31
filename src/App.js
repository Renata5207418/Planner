// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '@fontsource/chewy'; // Fonte divertida

function App() {
  // Estados para gerenciar as tarefas, inputs e filtros
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedColor, setSelectedColor] = useState('#fffbcc');
  const [location, setLocation] = useState('');
  const [filter, setFilter] = useState('all');

  // Carrega as tarefas do localStorage quando o componente é montado
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Salva as tarefas no localStorage sempre que elas mudam
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Função para formatar a data para DD/MM/AAAA
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === '') return;

    const newTask = {
      id: Date.now(),
      text: trimmedInput,
      completed: false,
      date: selectedDate,
      time: selectedTime,
      color: selectedColor,
      location: location.trim(),
    };

    setTasks([...tasks, newTask]);
    setInput('');
    setSelectedDate('');
    setSelectedTime('');
    setSelectedColor('#fffbcc'); // Reseta para a cor padrão
    setLocation('');
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Função para remover uma tarefa específica
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Função para limpar todas as tarefas concluídas
  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    setTasks(activeTasks);
  };

  // Função para lidar com a tecla 'Enter' no input de texto
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Filtra as tarefas com base no filtro selecionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Função que lida com o fim do arrastar e soltar
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Se não houver destino, não faz nada
    if (!destination) return;

    // Se o item foi movido para a mesma posição, não faz nada
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reordena as tarefas
    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className="container">
      <h1> Minhas Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="📝 Adicione uma nova tarefa..."
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-input"
          title="Selecione a data"
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="time-input"
          title="Selecione a hora"
        />
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="color-input"
          title="Selecione a cor do post-it"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="📍 Local (opcional)"
          className="location-input"
        />
        <button onClick={addTask} className="add-button" title="Adicionar Tarefa">
          <FaPlus />
        </button>
      </div>
      <div className="board">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul
                className="tasks-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="task-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          '--task-color': task.color,
                        }}
                      >
                        <div className="task-left">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id)}
                            title="Marcar como concluída"
                          />
                          <div className="task-details">
                            <span className={task.completed ? 'completed' : ''}>
                              {task.text}
                            </span>
                            {task.location && (
                              <span className="task-location">📍 {task.location}</span>
                            )}
                            {task.date && task.time && (
                              <span className="task-datetime">
                                📅 {formatDate(task.date)} às ⏰ {task.time}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          className="delete-btn"
                          onClick={() => deleteTask(task.id)}
                          title="Remover Tarefa"
                        >
                          <FaTrashAlt />
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="task-count">
        <span>
          🕒 {tasks.filter((task) => !task.completed).length} tarefa(s) pendente(s)
        </span>
      </div>
      <button className="clear-completed" onClick={clearCompleted} title="Limpar Tarefas Concluídas">
        🧹 Limpar Concluídas
      </button>
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
          title="Mostrar Todas as Tarefas"
        >
          Todas
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
          title="Mostrar Apenas Ativas"
        >
          Ativas
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
          title="Mostrar Apenas Concluídas"
        >
          Concluídas
        </button>
      </div>
    </div>
  );
}

export default App;

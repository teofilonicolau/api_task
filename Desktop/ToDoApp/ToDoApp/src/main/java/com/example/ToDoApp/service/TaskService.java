package com.example.ToDoApp.service;

import com.example.ToDoApp.model.Task;
import com.example.ToDoApp.repository.TaskRepository;
import com.example.ToDoApp.dto.TaskDTO;
import com.example.ToDoApp.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.validation.Valid;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<TaskDTO> getAllTasks(){
        return taskRepository.findAll().stream()
                .map(task -> new TaskDTO(task.getId(), task.getTitle(), task.getCompleted())) // Use getCompleted()
                .collect(Collectors.toList());
    }

    public TaskDTO createTask(@Valid TaskDTO taskDTO) {
        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setCompleted(taskDTO.getCompleted()); // Use getCompleted()
        task = taskRepository.save(task);
        return new TaskDTO(task.getId(), task.getTitle(), task.getCompleted()); // Use getCompleted()
    }

    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new ResourceNotFoundException("Task not found with id: " + id);
        }
        taskRepository.deleteById(id);
    }
}

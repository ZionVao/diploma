import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

export interface Task {
  name: string;
  status: 'todo' | 'inProgress' | 'done';
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
})
export class TaskboardComponent {
  tasks: Task[] = [
    { name: 'Task 1', status: 'todo' },
    { name: 'Task 2', status: 'inProgress' },
    { name: 'Task 3', status: 'done' },
    { name: 'Task 4', status: 'todo' },
    { name: 'Task 5', status: 'inProgress' },
  ];

  todoTasks: Task[] = this.tasks.filter((task) => task.status === 'todo');
  inProgressTasks: Task[] = this.tasks.filter(
    (task) => task.status === 'inProgress'
  );
  doneTasks: Task[] = this.tasks.filter((task) => task.status === 'done');

  onDrop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.status = event.container.id as 'todo' | 'inProgress' | 'done';
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

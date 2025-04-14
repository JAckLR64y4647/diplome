export class TaskListComponent {
  tasks = [];
  filter = '';
  styles = `
    .task-table {
      width: 100%;
      border-collapse: collapse;
    }
    .task-table th, .task-table td {
      border: 1px solid #ccc;
      padding: 0.5rem;
      text-align: left;
    }
    .filters {
      margin-bottom: 1rem;
    }
  `;
}
export class TaskFormComponent {
  isEdit = false;
  task = { title: '', description: '', priority: 'medium' };
  styles = `
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 0.5rem;
      padding: 1rem;
      width: 400px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
  `;
}
export class NavbarComponent {
  links = [
    { path: '/tasks', label: 'Tasks', icon: '📋' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin', label: 'Admin', icon: '👤' },
  ];
  styles = `
    .navbar {
      background: #f5f5f5;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
    .navbar-buttons button {
      margin-left: 0.5rem;
    }
  `;
}
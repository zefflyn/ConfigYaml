// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ConfigYaml title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ConfigYaml/i);
    expect(titleElement).toBeInTheDocument();
});

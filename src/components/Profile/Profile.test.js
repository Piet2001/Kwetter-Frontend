import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('renders Profile without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders user details info', () => {
    render(<Profile />);
    expect(screen.getByText('Details:')).toBeInTheDocument();
});

it('renders user stats info', () => {
    render(<Profile />);
    expect(screen.getByText('Stats:')).toBeInTheDocument();
});

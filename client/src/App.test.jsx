import React from 'react';
import {render,screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';

test('renders 3 list items', () => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
    const linkElement=screen.getAllByRole('listitem');
    expect(linkElement).toHaveLength(3);
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const dishes = ['Dish1', 'Dish2', 'Dish3']

describe('FoodDetail', () => {
    it('should render a component correctly', () => {
        const mockSelectDish = jest.fn();
        const wrapper = render(<SearchBar recipes={dishes} onSelectIndex={mockSelectDish} />);
        wrapper.findByRole('search-input');
    })

    it('should call a callback after clicking an item in the select', async () => {
        const mockSelectDish = jest.fn();
        const wrapper = render(<SearchBar recipes={dishes} onSelectIndex={mockSelectDish} />);
        const el = await wrapper.findByText('Dish1');
        fireEvent.click(el);
        expect(mockSelectDish).toHaveBeenCalled();
    })
})

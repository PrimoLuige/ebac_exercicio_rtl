// Post.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.';

describe('Post component', () => {
    it('Deve renderizar o botão "Comentar"', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários na lista', () => {
        render(<Post />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('submit-button');

        // Primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems.length).toBe(2);
        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
        expect(commentItems[1]).toHaveTextContent('Segundo comentário');
    });
});

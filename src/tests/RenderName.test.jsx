import RenderName from "../typeChecking/RenderName";
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react'

describe('RenderName', () => {
    it('Renders default name to the ui', () => {
        const { getByTestId } = render(<RenderName />);
        const text = getByTestId('name');
        expect(text).toBeInTheDocument();
    });

    it('Renders name when provided as prop', () => {
        const { getByText} = render(<RenderName name={'Adams'} />);
        expect(getByText('Adams')).toBeInTheDocument();
    });
});
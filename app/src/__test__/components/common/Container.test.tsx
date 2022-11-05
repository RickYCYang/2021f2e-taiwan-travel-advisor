import { render, cleanup, screen } from '@testing-library/react';
import Container from 'components/common/Container';

describe('component/common/Container', () => {
  beforeEach(cleanup);

  test('className', () => {
    const className = 'className';
    render(<Container className={className} />);
    expect(screen.getByTestId('container')).toHaveClass(className);
  });

  test('children', () => {
    const children = <a data-testid="test">Test</a>;
    render(<Container>{children}</Container>);
    const childrenElement = screen.getByTestId('test');
    expect(childrenElement).toBeInTheDocument;
    expect(screen.getByTestId('container')).toContainElement(childrenElement);
  });
});

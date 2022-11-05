import { render, cleanup, screen } from '@testing-library/react';
import Main from 'components/common/Main';

describe('component/common/Main', () => {
  beforeEach(cleanup);

  test('children', () => {
    const children = <a data-testid="test">Test</a>;
    render(<Main>{children}</Main>);
    const childrenElement = screen.getByTestId('test');
    expect(childrenElement).toBeInTheDocument;
  });

  test('className', () => {
    const element = <a>Test</a>;
    const testClassName = 'testClassName';
    render(<Main className={testClassName}>{element}</Main>);
    const main = screen.getByText('Test').closest('main');
    expect(main).toHaveClass(testClassName);
  });
});

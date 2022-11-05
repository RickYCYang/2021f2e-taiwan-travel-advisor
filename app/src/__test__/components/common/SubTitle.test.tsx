import { render, cleanup, screen } from '@testing-library/react';
import SubTitle from 'components/common/SubTitle';

describe('component/common/SubTitle', () => {
  beforeEach(cleanup);

  test('icon=triangle', () => {
    render(<SubTitle subTitle="Test" icon="triangle" />);
    expect(screen.getByTestId('triangle')).toBeInTheDocument;
  });

  test('icon=rectangle', () => {
    render(<SubTitle subTitle="Test" icon="rectangle" />);
    expect(screen.getByTestId('rectangle')).toBeInTheDocument;
  });

  test('icon=cloud', () => {
    render(<SubTitle subTitle="Test" icon="cloud" />);
    expect(screen.getByTestId('cloud')).toBeInTheDocument;
  });
});

import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Test is <GifItem /> ', () => {
  const title = 'Dindon';
  const url = 'https://dindon-dam.com/dindon.jpg';

  test('You must match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('It should display the image with the URL and Alt indicated', () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('You must display the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test <GifGrid/>', () => {
  const category = 'Game of Thrones';

  test('Should show the loading initially ', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('Should show items when loading images useFetchGifs', () => {
    const gifs = [
      {
        id: 'A123',
        title: 'Gollum',
        url: 'https://localhost/gollum.jpg',
      },
      {
        id: 'C123',
        title: 'Snow',
        url: 'https://localhost/snow.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

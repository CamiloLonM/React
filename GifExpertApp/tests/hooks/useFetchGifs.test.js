import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test in custom Hook <useFetchGifs/>', () => {
  test('Should show the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Game of Thrones'));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Should return an array of images and isLoading set to false', async () => {
    const { result } = renderHook(() => useFetchGifs('Game of Thrones'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

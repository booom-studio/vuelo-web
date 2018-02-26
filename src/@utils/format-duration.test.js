import formatDuration from './format-duration';

describe('Duration formatter', () => {
  test('default value', () => {
    expect(formatDuration()).toBe('00:00:00');
  });

  test('calculate correctly', () => {
    expect(formatDuration(12345678)).toBe('03:25:45');
    expect(formatDuration(123456789)).toBe('34:17:36');
    expect(formatDuration(123456)).toBe('00:02:03');
    expect(formatDuration(-456789)).toBe('00:07:36');
  });
});

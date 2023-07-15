import { getHealthStatus } from '../index';

describe('getHealthStatus', () => {
  test('should return "healthy" when health is more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    const status = getHealthStatus(character);
    expect(status).toBe('healthy');
  });

  test('should return "wounded" when health is between 50 and 15', () => {
    const character = { name: 'Маг', health: 30 };
    const status = getHealthStatus(character);
    expect(status).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    const status = getHealthStatus(character);
    expect(status).toBe('critical');
  });
});

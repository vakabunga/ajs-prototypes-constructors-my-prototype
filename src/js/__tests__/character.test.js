import Character from '../character';

describe('Character', () => {
  test('should calc this.health after damage', () => {
    const vaka = new Character('vaka', 'mage');
    vaka.damage(100);
    expect(vaka.health).toBe(40);
  });
  test('shouldnt change this.health after damage', () => {
    const vaka = new Character('vaka', 'mage');
    vaka.health = 0;
    vaka.damage(100);
    expect(vaka.health).toBe(0);
  });
});

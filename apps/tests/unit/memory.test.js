const { MemoryManager } = require('../../src/memory');

test('M+ 초기값 0에 5를 더하면 메모리 = 5', () => {
  const mem = new MemoryManager();
  mem.add(5);
  expect(mem.value).toBe(5);
});

test('M+ 후 M- 하면 메모리 값이 감소한다', () => {
  const mem = new MemoryManager();
  mem.add(5);
  mem.subtract(3);
  expect(mem.value).toBe(2);
});

test('MR은 저장된 메모리 값을 반환한다', () => {
  const mem = new MemoryManager();
  mem.add(7);
  expect(mem.recall()).toBe(7);
});

test('MC 후 메모리 값이 0이 된다', () => {
  const mem = new MemoryManager();
  mem.add(10);
  mem.clear();
  expect(mem.value).toBe(0);
});

test('메모리가 0이 아닐 때 hasValue가 true', () => {
  const mem = new MemoryManager();
  mem.add(5);
  expect(mem.hasValue).toBe(true);
});

test('MC 후 hasValue가 false', () => {
  const mem = new MemoryManager();
  mem.add(5);
  mem.clear();
  expect(mem.hasValue).toBe(false);
});

test('메모리 값이 음수가 될 수 있다', () => {
  const mem = new MemoryManager();
  mem.add(3);
  mem.subtract(5);
  expect(mem.value).toBe(-2);
});

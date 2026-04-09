class MemoryManager {
  constructor() {
    this._value = 0;
  }

  get value() { return this._value; }
  get hasValue() { return this._value !== 0; }

  add(n) { this._value += n; }
  subtract(n) { this._value -= n; }
  recall() { return this._value; }
  clear() { this._value = 0; }
}

module.exports = { MemoryManager };

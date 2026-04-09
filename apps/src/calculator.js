/**
 * 기본 사칙연산 및 공학 함수 계산 엔진
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return { error: '오류: 0으로 나눌 수 없습니다' };
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

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

function sinDeg(deg) { return Math.sin(deg * Math.PI / 180); }
function cosDeg(deg) { return Math.cos(deg * Math.PI / 180); }
function tanDeg(deg) {
  const normalized = ((deg % 360) + 360) % 360;
  if (normalized === 90 || normalized === 270) return { error: '오류: 정의되지 않는 값' };
  return Math.tan(deg * Math.PI / 180);
}

function sinRad(rad) { return Math.sin(rad); }
function cosRad(rad) { return Math.cos(rad); }
function tanRad(rad) { return Math.tan(rad); }

function log10(val) {
  if (val <= 0) return { error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' };
  return Math.log10(val);
}
function ln(val) {
  if (val <= 0) return { error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' };
  return Math.log(val);
}
function sqrt(val) {
  if (val < 0) return { error: '오류: 음수의 제곱근은 계산할 수 없습니다' };
  return Math.sqrt(val);
}
function square(val) { return val * val; }
function power(base, exp) { return Math.pow(base, exp); }

function formatResult(val) {
  if (typeof val !== 'number') return String(val);
  if (!isFinite(val)) return '오류';
  const rounded = parseFloat(val.toPrecision(10));
  if (Math.abs(rounded) >= 1e15 || (Math.abs(rounded) < 1e-10 && rounded !== 0)) {
    return rounded.toExponential();
  }
  return String(rounded);
}

module.exports = { add, subtract, multiply, divide, sinDeg, cosDeg, tanDeg, sinRad, cosRad, tanRad, log10, ln, sqrt, square, power, formatResult };

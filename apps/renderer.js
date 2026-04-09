// 계산기 상태
let expression = '';
let angleMode = 'DEG'; // 'DEG' | 'RAD'
let memory = 0;
let lastResult = null;
let history = JSON.parse(localStorage.getItem('calc-history') || '[]');

const exprEl = document.getElementById('expression');
const resultEl = document.getElementById('result');
const angleModeEl = document.getElementById('angle-mode');
const memoryIndicatorEl = document.getElementById('memory-indicator');
const historyListEl = document.getElementById('history-list');

// 히스토리 초기 렌더링
renderHistory();

// 버튼 클릭
document.getElementById('buttons').addEventListener('click', e => {
  const key = e.target.dataset.key;
  if (!key) return;
  handleKey(key);
});

// 히스토리 삭제
document.getElementById('history-clear').addEventListener('click', () => {
  history = [];
  localStorage.removeItem('calc-history');
  renderHistory();
});

// 키보드 입력
document.addEventListener('keydown', e => {
  const map = {
    'Enter': '=',
    'Escape': 'AC',
    'Backspace': 'backspace',
    '+': '+', '-': '-', '*': '×', '/': '÷',
    '.': '.'
  };
  if (map[e.key]) { handleKey(map[e.key]); return; }
  if (e.key >= '0' && e.key <= '9') handleKey(e.key);
});

function handleKey(key) {
  if (key === 'AC') {
    expression = '';
    lastResult = null;
    showResult('0');
    showExpression('');
    return;
  }

  if (key === 'backspace') {
    if (resultEl.classList.contains('error')) {
      resultEl.classList.remove('error');
      showResult('0');
      return;
    }
    expression = expression.slice(0, -1);
    showExpression(expression);
    if (!expression) showResult('0');
    return;
  }

  if (key === 'DEG/RAD') {
    angleMode = angleMode === 'DEG' ? 'RAD' : 'DEG';
    angleModeEl.textContent = angleMode;
    return;
  }

  if (['M+', 'M-', 'MR', 'MC'].includes(key)) {
    handleMemory(key);
    return;
  }

  if (key === '=') {
    calculate();
    return;
  }

  // 공학 함수 (단항)
  const unary = ['sin', 'cos', 'tan', 'log', 'ln', 'sqrt', 'square'];
  if (unary.includes(key)) {
    const val = parseFloat(expression || resultEl.textContent);
    if (isNaN(val)) return;
    const res = applyUnary(key, val);
    if (res && res.error) {
      showError(res.error);
    } else {
      addHistory(`${key}(${val})`, res);
      expression = String(res);
      showExpression(`${key}(${val})`);
      showResult(formatResult(res));
      lastResult = res;
    }
    return;
  }

  // xʸ는 이항 연산자로 ^
  if (key === 'power') {
    expression += '^';
    showExpression(expression);
    return;
  }

  // 숫자 및 연산자 입력
  if (resultEl.classList.contains('error')) {
    resultEl.classList.remove('error');
    expression = '';
  }
  expression += key;
  showExpression(expression);
}

function calculate() {
  if (!expression) return;
  try {
    const result = evalExpression(expression);
    if (result && result.error) {
      showError(result.error);
      return;
    }
    const formatted = formatResult(result);
    addHistory(expression, formatted);
    showExpression(expression);
    showResult(formatted);
    expression = formatted;
    lastResult = result;
  } catch (e) {
    showError('오류: 잘못된 수식');
  }
}

function evalExpression(expr) {
  // 연산자 파싱: +, -, ×, ÷, ^
  const tokens = expr.split(/([+\-×÷^])/);
  if (tokens.length === 1) return parseFloat(tokens[0]);

  // 우선순위: ^ > × ÷ > + -
  // 간단 구현: 왼쪽에서 오른쪽 (^ 먼저)
  let normalized = expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\^/g, '**');

  // 0으로 나누기 검사
  if (/\/\s*0(?![.\d])/.test(normalized)) {
    return { error: '오류: 0으로 나눌 수 없습니다' };
  }

  const result = Function('"use strict"; return (' + normalized + ')')();
  if (!isFinite(result)) return { error: '오류: 0으로 나눌 수 없습니다' };
  return result;
}

function applyUnary(fn, val) {
  const rad = angleMode === 'DEG' ? val * Math.PI / 180 : val;
  switch (fn) {
    case 'sin': return Math.sin(rad);
    case 'cos': return Math.cos(rad);
    case 'tan': {
      // tan이 정의 안 되는 각도 (90 + n*180 DEG)
      if (angleMode === 'DEG') {
        const normalized = ((val % 360) + 360) % 360;
        if (normalized === 90 || normalized === 270) {
          return { error: '오류: 정의되지 않는 값' };
        }
      }
      return Math.tan(rad);
    }
    case 'log':
      if (val <= 0) return { error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' };
      return Math.log10(val);
    case 'ln':
      if (val <= 0) return { error: '오류: 0 이하의 값은 로그를 계산할 수 없습니다' };
      return Math.log(val);
    case 'sqrt':
      if (val < 0) return { error: '오류: 음수의 제곱근은 계산할 수 없습니다' };
      return Math.sqrt(val);
    case 'square':
      return val * val;
  }
}

function formatResult(val) {
  if (typeof val !== 'number') return String(val);
  if (!isFinite(val)) return '오류';
  // 부동소수점 오류 처리
  const rounded = parseFloat(val.toPrecision(10));
  // 지수 표기
  if (Math.abs(rounded) >= 1e15 || (Math.abs(rounded) < 1e-10 && rounded !== 0)) {
    return rounded.toExponential();
  }
  return String(rounded);
}

function handleMemory(key) {
  const current = parseFloat(resultEl.textContent) || 0;
  switch (key) {
    case 'M+': memory += current; break;
    case 'M-': memory -= current; break;
    case 'MR':
      expression = String(memory);
      showExpression(expression);
      showResult(formatResult(memory));
      break;
    case 'MC': memory = 0; break;
  }
  memoryIndicatorEl.classList.toggle('hidden', memory === 0);
}

function addHistory(expr, result) {
  const item = `${expr} = ${result}`;
  history.unshift(item);
  if (history.length > 50) history.pop();
  localStorage.setItem('calc-history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyListEl.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.textContent = item;
    li.addEventListener('click', () => {
      const result = item.split(' = ').pop();
      expression = result;
      showExpression('');
      showResult(result);
    });
    historyListEl.appendChild(li);
  });
}

function showExpression(text) { exprEl.textContent = text; }
function showResult(text) {
  resultEl.textContent = text;
  resultEl.classList.remove('error');
}
function showError(msg) {
  resultEl.textContent = msg;
  resultEl.classList.add('error');
  expression = '';
}

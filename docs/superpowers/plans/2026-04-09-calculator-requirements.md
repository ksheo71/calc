# 공학용 계산기 요구사항 작성 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/docs/requirements/` 디렉토리에 공학용 계산기의 기능/비기능 요구사항 파일(FR-01~24, NFR-01~06)을 개별 마크다운 파일로 작성한다.

**Architecture:** 각 요구사항을 독립적인 최소단위 마크다운 파일로 작성한다. 파일명은 `{prefix}-{number}-{description}.md` 형식을 따른다. 각 파일은 설명, 입력/출력, 수용 기준, 관련 요구사항을 포함한다.

**Tech Stack:** Markdown, `/docs/requirements/` 디렉토리

---

## 파일 구조

```
docs/requirements/
  FR-01-addition.md
  FR-02-subtraction.md
  FR-03-multiplication.md
  FR-04-division.md
  FR-05-sin.md
  FR-06-cos.md
  FR-07-tan.md
  FR-08-log.md
  FR-09-ln.md
  FR-10-sqrt.md
  FR-11-power-square.md
  FR-12-power-custom.md
  FR-13-angle-mode.md
  FR-14-history-display.md
  FR-15-history-reuse.md
  FR-16-history-clear.md
  FR-17-memory-add.md
  FR-18-memory-subtract.md
  FR-19-memory-recall.md
  FR-20-memory-clear.md
  FR-21-display-expression.md
  FR-22-display-result.md
  FR-23-clear.md
  FR-24-backspace.md
  NFR-01-performance.md
  NFR-02-theme.md
  NFR-03-platform.md
  NFR-04-keyboard.md
  NFR-05-precision.md
  NFR-06-error-message.md
```

---

## Task 1: 사칙연산 (FR-01~04)

**Files:**
- Create: `docs/requirements/FR-01-addition.md`
- Create: `docs/requirements/FR-02-subtraction.md`
- Create: `docs/requirements/FR-03-multiplication.md`
- Create: `docs/requirements/FR-04-division.md`

- [ ] **Step 1: FR-01-addition.md 작성**

```markdown
# FR-01: 덧셈

## 설명
두 수를 입력받아 덧셈 연산(+)을 수행하고 결과를 반환한다.

## 입력
- 피연산자 A (숫자)
- 피연산자 B (숫자)
- 연산자: `+`

## 출력
- A + B 의 결과값

## 수용 기준
- [ ] 양의 정수 덧셈이 정확히 계산된다 (예: 3 + 5 = 8)
- [ ] 소수점 덧셈이 정확히 계산된다 (예: 1.5 + 2.3 = 3.8)
- [ ] 음수 덧셈이 정확히 계산된다 (예: -3 + 5 = 2)
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
```

- [ ] **Step 2: FR-02-subtraction.md 작성**

```markdown
# FR-02: 뺄셈

## 설명
두 수를 입력받아 뺄셈 연산(-)을 수행하고 결과를 반환한다.

## 입력
- 피연산자 A (숫자)
- 피연산자 B (숫자)
- 연산자: `-`

## 출력
- A - B 의 결과값

## 수용 기준
- [ ] 양의 정수 뺄셈이 정확히 계산된다 (예: 8 - 3 = 5)
- [ ] 결과가 음수인 경우도 정확히 계산된다 (예: 3 - 8 = -5)
- [ ] 소수점 뺄셈이 정확히 계산된다 (예: 3.5 - 1.2 = 2.3)
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
```

- [ ] **Step 3: FR-03-multiplication.md 작성**

```markdown
# FR-03: 곱셈

## 설명
두 수를 입력받아 곱셈 연산(×)을 수행하고 결과를 반환한다.

## 입력
- 피연산자 A (숫자)
- 피연산자 B (숫자)
- 연산자: `×`

## 출력
- A × B 의 결과값

## 수용 기준
- [ ] 양의 정수 곱셈이 정확히 계산된다 (예: 4 × 3 = 12)
- [ ] 소수점 곱셈이 정확히 계산된다 (예: 2.5 × 4 = 10)
- [ ] 음수 곱셈이 정확히 계산된다 (예: -3 × 4 = -12)
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
```

- [ ] **Step 4: FR-04-division.md 작성**

```markdown
# FR-04: 나눗셈

## 설명
두 수를 입력받아 나눗셈 연산(÷)을 수행하고 결과를 반환한다. 0으로 나누는 경우 오류를 처리한다.

## 입력
- 피연산자 A (숫자, 피제수)
- 피연산자 B (숫자, 제수)
- 연산자: `÷`

## 출력
- A ÷ B 의 결과값
- B가 0인 경우: 오류 메시지 표시

## 수용 기준
- [ ] 정수 나눗셈이 정확히 계산된다 (예: 10 ÷ 2 = 5)
- [ ] 결과가 소수인 나눗셈이 정확히 계산된다 (예: 10 ÷ 3 = 3.3333333333)
- [ ] 0으로 나누는 경우 "오류: 0으로 나눌 수 없습니다" 메시지가 표시된다
- [ ] 0으로 나누는 경우 계산기 상태가 초기화되지 않고 오류만 표시된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 5: 파일 생성 확인**

```bash
ls docs/requirements/FR-0*.md
```
예상 출력: FR-01~04 파일 4개 목록

- [ ] **Step 6: 커밋**

```bash
git add docs/requirements/FR-01-addition.md docs/requirements/FR-02-subtraction.md docs/requirements/FR-03-multiplication.md docs/requirements/FR-04-division.md
git commit -m "docs: add arithmetic operation requirements (FR-01~04)"
```

---

## Task 2: 삼각함수 (FR-05~07)

**Files:**
- Create: `docs/requirements/FR-05-sin.md`
- Create: `docs/requirements/FR-06-cos.md`
- Create: `docs/requirements/FR-07-tan.md`

- [ ] **Step 1: FR-05-sin.md 작성**

```markdown
# FR-05: sin 함수

## 설명
입력값에 대해 사인(sin) 함수를 계산한다. 각도 단위는 FR-13의 DEG/RAD 설정을 따른다.

## 입력
- 피연산자 A (숫자, 각도값)
- 현재 각도 모드 (DEG 또는 RAD, FR-13 참조)

## 출력
- sin(A) 의 결과값 (-1 이상 1 이하)

## 수용 기준
- [ ] DEG 모드에서 sin(0) = 0 이 계산된다
- [ ] DEG 모드에서 sin(90) = 1 이 계산된다
- [ ] DEG 모드에서 sin(30) = 0.5 이 계산된다
- [ ] RAD 모드에서 sin(0) = 0 이 계산된다
- [ ] RAD 모드에서 sin(π/2) = 1 이 계산된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-13: DEG/RAD 전환
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
```

- [ ] **Step 2: FR-06-cos.md 작성**

```markdown
# FR-06: cos 함수

## 설명
입력값에 대해 코사인(cos) 함수를 계산한다. 각도 단위는 FR-13의 DEG/RAD 설정을 따른다.

## 입력
- 피연산자 A (숫자, 각도값)
- 현재 각도 모드 (DEG 또는 RAD, FR-13 참조)

## 출력
- cos(A) 의 결과값 (-1 이상 1 이하)

## 수용 기준
- [ ] DEG 모드에서 cos(0) = 1 이 계산된다
- [ ] DEG 모드에서 cos(90) = 0 이 계산된다
- [ ] DEG 모드에서 cos(60) = 0.5 이 계산된다
- [ ] RAD 모드에서 cos(0) = 1 이 계산된다
- [ ] RAD 모드에서 cos(π) = -1 이 계산된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-13: DEG/RAD 전환
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
```

- [ ] **Step 3: FR-07-tan.md 작성**

```markdown
# FR-07: tan 함수

## 설명
입력값에 대해 탄젠트(tan) 함수를 계산한다. 각도 단위는 FR-13의 DEG/RAD 설정을 따른다. tan이 정의되지 않는 각도(90°, 270° 등)에 대해 오류를 처리한다.

## 입력
- 피연산자 A (숫자, 각도값)
- 현재 각도 모드 (DEG 또는 RAD, FR-13 참조)

## 출력
- tan(A) 의 결과값
- 정의되지 않는 각도(DEG 모드: 90°+n×180°, RAD 모드: π/2+n×π)인 경우: 오류 메시지

## 수용 기준
- [ ] DEG 모드에서 tan(0) = 0 이 계산된다
- [ ] DEG 모드에서 tan(45) = 1 이 계산된다
- [ ] DEG 모드에서 tan(90) 입력 시 "오류: 정의되지 않는 값" 메시지가 표시된다
- [ ] RAD 모드에서 tan(0) = 0 이 계산된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-13: DEG/RAD 전환
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 4: 커밋**

```bash
git add docs/requirements/FR-05-sin.md docs/requirements/FR-06-cos.md docs/requirements/FR-07-tan.md
git commit -m "docs: add trigonometric function requirements (FR-05~07)"
```

---

## Task 3: 로그 및 지수 함수 (FR-08~12)

**Files:**
- Create: `docs/requirements/FR-08-log.md`
- Create: `docs/requirements/FR-09-ln.md`
- Create: `docs/requirements/FR-10-sqrt.md`
- Create: `docs/requirements/FR-11-power-square.md`
- Create: `docs/requirements/FR-12-power-custom.md`

- [ ] **Step 1: FR-08-log.md 작성**

```markdown
# FR-08: log₁₀ 함수

## 설명
입력값에 대해 상용로그(log₁₀) 함수를 계산한다. 0 이하의 값에 대해 오류를 처리한다.

## 입력
- 피연산자 A (숫자, 양수)

## 출력
- log₁₀(A) 의 결과값
- A ≤ 0 인 경우: 오류 메시지

## 수용 기준
- [ ] log(1) = 0 이 계산된다
- [ ] log(10) = 1 이 계산된다
- [ ] log(100) = 2 이 계산된다
- [ ] log(0) 입력 시 "오류: 0 이하의 값은 로그를 계산할 수 없습니다" 메시지가 표시된다
- [ ] log(-1) 입력 시 오류 메시지가 표시된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 2: FR-09-ln.md 작성**

```markdown
# FR-09: 자연로그 (ln)

## 설명
입력값에 대해 자연로그(ln, log_e) 함수를 계산한다. 0 이하의 값에 대해 오류를 처리한다.

## 입력
- 피연산자 A (숫자, 양수)

## 출력
- ln(A) 의 결과값
- A ≤ 0 인 경우: 오류 메시지

## 수용 기준
- [ ] ln(1) = 0 이 계산된다
- [ ] ln(e) ≈ 1 이 계산된다 (e ≈ 2.718281828)
- [ ] ln(0) 입력 시 "오류: 0 이하의 값은 로그를 계산할 수 없습니다" 메시지가 표시된다
- [ ] ln(-1) 입력 시 오류 메시지가 표시된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 3: FR-10-sqrt.md 작성**

```markdown
# FR-10: 제곱근 (√)

## 설명
입력값에 대해 제곱근(√) 함수를 계산한다. 음수에 대해 오류를 처리한다.

## 입력
- 피연산자 A (숫자, 0 이상)

## 출력
- √A 의 결과값
- A < 0 인 경우: 오류 메시지

## 수용 기준
- [ ] √0 = 0 이 계산된다
- [ ] √4 = 2 이 계산된다
- [ ] √2 ≈ 1.4142135623 이 계산된다
- [ ] √(-1) 입력 시 "오류: 음수의 제곱근은 계산할 수 없습니다" 메시지가 표시된다
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 4: FR-11-power-square.md 작성**

```markdown
# FR-11: 제곱 (x²)

## 설명
입력값을 2제곱하여 결과를 반환한다.

## 입력
- 피연산자 A (숫자)

## 출력
- A² 의 결과값

## 수용 기준
- [ ] 3² = 9 이 계산된다
- [ ] (-3)² = 9 이 계산된다
- [ ] 0² = 0 이 계산된다
- [ ] 소수점 입력도 계산된다 (예: 1.5² = 2.25)
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
```

- [ ] **Step 5: FR-12-power-custom.md 작성**

```markdown
# FR-12: 거듭제곱 (xʸ)

## 설명
밑수(x)와 지수(y)를 입력받아 거듭제곱(xʸ)을 계산한다.

## 입력
- 피연산자 A (숫자, 밑수)
- 피연산자 B (숫자, 지수)
- 연산자: `^` (또는 xʸ 버튼)

## 출력
- A^B 의 결과값

## 수용 기준
- [ ] 2^10 = 1024 이 계산된다
- [ ] 2^0 = 1 이 계산된다
- [ ] 2^(-1) = 0.5 이 계산된다
- [ ] 4^0.5 = 2 이 계산된다 (소수 지수)
- [ ] 계산 결과가 FR-22에 따라 화면에 표시된다
- [ ] 계산 후 결과가 FR-14에 따라 히스토리에 기록된다

## 관련 요구사항
- FR-22: 계산 결과 화면 표시
- FR-14: 히스토리 표시
- NFR-05: 부동소수점 정밀도
```

- [ ] **Step 6: 커밋**

```bash
git add docs/requirements/FR-08-log.md docs/requirements/FR-09-ln.md docs/requirements/FR-10-sqrt.md docs/requirements/FR-11-power-square.md docs/requirements/FR-12-power-custom.md
git commit -m "docs: add log, sqrt, power function requirements (FR-08~12)"
```

---

## Task 4: 각도 모드 및 화면 표시 (FR-13, FR-21~22)

**Files:**
- Create: `docs/requirements/FR-13-angle-mode.md`
- Create: `docs/requirements/FR-21-display-expression.md`
- Create: `docs/requirements/FR-22-display-result.md`

- [ ] **Step 1: FR-13-angle-mode.md 작성**

```markdown
# FR-13: DEG/RAD 전환

## 설명
삼각함수(sin, cos, tan) 계산 시 사용할 각도 단위를 DEG(도)와 RAD(라디안) 중에서 선택할 수 있다.

## 입력
- DEG/RAD 전환 버튼 클릭

## 출력
- 현재 각도 모드가 DEG ↔ RAD 로 전환된다
- 화면에 현재 각도 모드(DEG 또는 RAD)가 표시된다

## 수용 기준
- [ ] 기본 각도 모드는 DEG이다
- [ ] DEG/RAD 버튼 클릭 시 모드가 전환된다
- [ ] 현재 모드(DEG 또는 RAD)가 화면에 항상 표시된다
- [ ] 모드 전환 시 이미 입력된 수식은 유지된다
- [ ] 전환된 모드는 이후 모든 삼각함수 계산에 즉시 적용된다

## 관련 요구사항
- FR-05: sin 함수
- FR-06: cos 함수
- FR-07: tan 함수
```

- [ ] **Step 2: FR-21-display-expression.md 작성**

```markdown
# FR-21: 입력 수식 화면 표시

## 설명
사용자가 입력하는 수식(숫자, 연산자, 함수)을 실시간으로 화면 상단에 표시한다.

## 입력
- 사용자의 버튼 클릭 또는 키보드 입력

## 출력
- 현재 입력 중인 수식이 화면에 표시된다

## 수용 기준
- [ ] 숫자 입력 시 즉시 화면에 표시된다
- [ ] 연산자(+, -, ×, ÷) 입력 시 화면에 표시된다
- [ ] 공학 함수(sin, cos, tan 등) 선택 시 함수명이 화면에 표시된다
- [ ] 수식이 화면 너비를 초과하면 스크롤 또는 줄임 처리된다
- [ ] AC 입력 시 수식 표시가 초기화된다 (FR-23 참조)
- [ ] Backspace 입력 시 마지막 문자가 제거되어 표시된다 (FR-24 참조)

## 관련 요구사항
- FR-23: AC (전체 초기화)
- FR-24: Backspace
- FR-22: 계산 결과 화면 표시
```

- [ ] **Step 3: FR-22-display-result.md 작성**

```markdown
# FR-22: 계산 결과 화면 표시

## 설명
= 버튼 입력 또는 단항 함수 계산 완료 시 결과값을 화면 하단(결과 영역)에 표시한다.

## 입력
- = 버튼 클릭 또는 Enter 키 입력
- 단항 함수(sin, cos, tan, log, ln, √, x²) 버튼 클릭

## 출력
- 계산 결과값이 화면 결과 영역에 표시된다

## 수용 기준
- [ ] 사칙연산 결과가 결과 영역에 표시된다
- [ ] 공학 함수 결과가 결과 영역에 표시된다
- [ ] 결과가 소수인 경우 최대 10자리까지 표시된다 (NFR-05 참조)
- [ ] 결과가 매우 크거나 작은 경우 지수 표기법(예: 1.23e+10)으로 표시된다
- [ ] 오류 상황에서는 결과 대신 오류 메시지가 표시된다 (NFR-06 참조)
- [ ] 결과 표시 후 결과값을 다음 연산의 입력으로 사용할 수 있다

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- NFR-05: 부동소수점 정밀도
- NFR-06: 오류 메시지 표시
```

- [ ] **Step 4: 커밋**

```bash
git add docs/requirements/FR-13-angle-mode.md docs/requirements/FR-21-display-expression.md docs/requirements/FR-22-display-result.md
git commit -m "docs: add angle mode and display requirements (FR-13, FR-21~22)"
```

---

## Task 5: 히스토리 (FR-14~16)

**Files:**
- Create: `docs/requirements/FR-14-history-display.md`
- Create: `docs/requirements/FR-15-history-reuse.md`
- Create: `docs/requirements/FR-16-history-clear.md`

- [ ] **Step 1: FR-14-history-display.md 작성**

```markdown
# FR-14: 히스토리 표시

## 설명
계산이 완료될 때마다 계산식과 결과를 히스토리 목록에 추가하여 화면에 표시한다.

## 입력
- 계산 완료 이벤트 (= 버튼 또는 단항 함수 실행)

## 출력
- 히스토리 목록에 새 항목이 추가된다
- 각 항목은 "계산식 = 결과" 형식으로 표시된다

## 수용 기준
- [ ] 계산 완료 시 히스토리 목록 최상단에 새 항목이 추가된다
- [ ] 히스토리 항목은 "수식 = 결과" 형식으로 표시된다 (예: "3 + 5 = 8")
- [ ] 최소 20개의 히스토리 항목을 저장하고 표시할 수 있다
- [ ] 히스토리 목록이 넘치면 스크롤로 이전 항목을 볼 수 있다
- [ ] 앱 재시작 후에도 히스토리가 유지된다

## 관련 요구사항
- FR-15: 히스토리 재사용
- FR-16: 히스토리 전체 삭제
- FR-22: 계산 결과 화면 표시
```

- [ ] **Step 2: FR-15-history-reuse.md 작성**

```markdown
# FR-15: 히스토리 재사용

## 설명
히스토리 목록에서 이전 계산 항목을 클릭하면 해당 결과값이 현재 입력란에 채워져 다음 연산에 사용할 수 있다.

## 입력
- 히스토리 목록의 특정 항목 클릭

## 출력
- 클릭한 항목의 결과값이 현재 입력 영역(FR-21)에 채워진다

## 수용 기준
- [ ] 히스토리 항목 클릭 시 해당 결과값이 입력란에 채워진다
- [ ] 값이 채워진 후 사용자는 추가 연산자를 입력하여 연산을 이어갈 수 있다
- [ ] 값이 채워지면 기존에 입력하던 수식은 대체된다
- [ ] 재사용 시 히스토리 목록 자체는 변경되지 않는다

## 관련 요구사항
- FR-14: 히스토리 표시
- FR-21: 입력 수식 화면 표시
```

- [ ] **Step 3: FR-16-history-clear.md 작성**

```markdown
# FR-16: 히스토리 전체 삭제

## 설명
히스토리 목록 전체를 삭제하는 기능을 제공한다.

## 입력
- 히스토리 삭제 버튼 클릭 (또는 히스토리 영역의 삭제 아이콘)

## 출력
- 히스토리 목록이 비워진다

## 수용 기준
- [ ] 히스토리 삭제 버튼 클릭 시 전체 히스토리가 삭제된다
- [ ] 삭제 후 히스토리 목록이 빈 상태로 표시된다
- [ ] 앱 재시작 후에도 삭제된 히스토리는 복구되지 않는다
- [ ] 삭제 전 확인 다이얼로그는 표시하지 않는다 (빠른 UX)

## 관련 요구사항
- FR-14: 히스토리 표시
```

- [ ] **Step 4: 커밋**

```bash
git add docs/requirements/FR-14-history-display.md docs/requirements/FR-15-history-reuse.md docs/requirements/FR-16-history-clear.md
git commit -m "docs: add history requirements (FR-14~16)"
```

---

## Task 6: 메모리 (FR-17~20)

**Files:**
- Create: `docs/requirements/FR-17-memory-add.md`
- Create: `docs/requirements/FR-18-memory-subtract.md`
- Create: `docs/requirements/FR-19-memory-recall.md`
- Create: `docs/requirements/FR-20-memory-clear.md`

- [ ] **Step 1: FR-17-memory-add.md 작성**

```markdown
# FR-17: M+ (메모리 더하기)

## 설명
현재 화면에 표시된 값을 메모리에 더한다. 메모리 초기값은 0이다.

## 입력
- M+ 버튼 클릭
- 현재 표시값 (FR-22의 결과 또는 FR-21의 입력값)

## 출력
- 메모리 값 = 기존 메모리 값 + 현재 표시값
- 메모리에 값이 저장되었음을 나타내는 인디케이터 표시

## 수용 기준
- [ ] M+ 클릭 시 현재 표시값이 메모리에 더해진다
- [ ] 메모리 초기값은 0이다
- [ ] 메모리에 값이 있을 때 화면 상단에 "M" 인디케이터가 표시된다
- [ ] M+ 후 현재 입력 상태는 변경되지 않는다

## 관련 요구사항
- FR-18: M- (메모리 빼기)
- FR-19: MR (메모리 불러오기)
- FR-20: MC (메모리 초기화)
```

- [ ] **Step 2: FR-18-memory-subtract.md 작성**

```markdown
# FR-18: M- (메모리 빼기)

## 설명
현재 화면에 표시된 값을 메모리에서 뺀다.

## 입력
- M- 버튼 클릭
- 현재 표시값

## 출력
- 메모리 값 = 기존 메모리 값 - 현재 표시값
- 메모리 값이 0이 되면 "M" 인디케이터가 사라진다

## 수용 기준
- [ ] M- 클릭 시 현재 표시값이 메모리에서 빼진다
- [ ] 메모리 값이 0이 되면 화면의 "M" 인디케이터가 사라진다
- [ ] M- 후 현재 입력 상태는 변경되지 않는다
- [ ] 메모리 값이 음수가 되는 것도 허용된다

## 관련 요구사항
- FR-17: M+ (메모리 더하기)
- FR-19: MR (메모리 불러오기)
- FR-20: MC (메모리 초기화)
```

- [ ] **Step 3: FR-19-memory-recall.md 작성**

```markdown
# FR-19: MR (메모리 불러오기)

## 설명
메모리에 저장된 값을 현재 입력란에 불러온다.

## 입력
- MR 버튼 클릭

## 출력
- 메모리 값이 현재 입력란(FR-21)에 채워진다

## 수용 기준
- [ ] MR 클릭 시 메모리 값이 입력란에 채워진다
- [ ] 메모리 값이 0인 경우 0이 입력란에 채워진다
- [ ] MR 후 기존에 입력하던 수식은 메모리 값으로 대체된다
- [ ] MR 후 메모리 값 자체는 변경되지 않는다

## 관련 요구사항
- FR-17: M+ (메모리 더하기)
- FR-20: MC (메모리 초기화)
- FR-21: 입력 수식 화면 표시
```

- [ ] **Step 4: FR-20-memory-clear.md 작성**

```markdown
# FR-20: MC (메모리 초기화)

## 설명
메모리에 저장된 값을 0으로 초기화한다.

## 입력
- MC 버튼 클릭

## 출력
- 메모리 값이 0으로 초기화된다
- 화면의 "M" 인디케이터가 사라진다

## 수용 기준
- [ ] MC 클릭 시 메모리 값이 0으로 초기화된다
- [ ] MC 후 화면의 "M" 인디케이터가 사라진다
- [ ] MC 후 현재 입력 상태는 변경되지 않는다

## 관련 요구사항
- FR-17: M+ (메모리 더하기)
- FR-18: M- (메모리 빼기)
- FR-19: MR (메모리 불러오기)
```

- [ ] **Step 5: 커밋**

```bash
git add docs/requirements/FR-17-memory-add.md docs/requirements/FR-18-memory-subtract.md docs/requirements/FR-19-memory-recall.md docs/requirements/FR-20-memory-clear.md
git commit -m "docs: add memory function requirements (FR-17~20)"
```

---

## Task 7: 초기화 및 삭제 (FR-23~24)

**Files:**
- Create: `docs/requirements/FR-23-clear.md`
- Create: `docs/requirements/FR-24-backspace.md`

- [ ] **Step 1: FR-23-clear.md 작성**

```markdown
# FR-23: AC (전체 초기화)

## 설명
AC(All Clear) 버튼을 눌러 현재 입력 수식, 결과값을 모두 초기화하고 계산기를 초기 상태로 되돌린다.

## 입력
- AC 버튼 클릭 또는 Escape 키 입력

## 출력
- 입력 수식이 초기화된다 (빈 상태)
- 결과 표시가 0으로 초기화된다
- 연산자 상태가 초기화된다

## 수용 기준
- [ ] AC 클릭 시 입력란이 빈 상태로 초기화된다
- [ ] AC 클릭 시 결과 영역이 0으로 초기화된다
- [ ] AC 클릭 시 진행 중이던 연산이 취소된다
- [ ] 메모리 값은 AC로 초기화되지 않는다 (MC로만 초기화)
- [ ] Escape 키로도 동일한 기능이 동작한다 (NFR-04 참조)

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- FR-22: 계산 결과 화면 표시
- NFR-04: 키보드 입력 지원
```

- [ ] **Step 2: FR-24-backspace.md 작성**

```markdown
# FR-24: Backspace (마지막 문자 삭제)

## 설명
Backspace 버튼 또는 키보드 Backspace 키를 눌러 현재 입력 수식의 마지막 문자를 삭제한다.

## 입력
- Backspace 버튼 클릭 또는 키보드 Backspace 키 입력

## 출력
- 현재 입력 수식의 마지막 문자가 삭제된다

## 수용 기준
- [ ] Backspace 클릭 시 마지막 입력 문자 1개가 삭제된다
- [ ] 수식이 한 글자인 상태에서 Backspace 클릭 시 입력란이 빈 상태가 된다 (0 표시)
- [ ] 입력란이 이미 비어 있을 때 Backspace를 눌러도 오류가 발생하지 않는다
- [ ] 키보드 Backspace 키로도 동일한 기능이 동작한다 (NFR-04 참조)

## 관련 요구사항
- FR-21: 입력 수식 화면 표시
- NFR-04: 키보드 입력 지원
```

- [ ] **Step 3: 커밋**

```bash
git add docs/requirements/FR-23-clear.md docs/requirements/FR-24-backspace.md
git commit -m "docs: add clear and backspace requirements (FR-23~24)"
```

---

## Task 8: 비기능 요구사항 (NFR-01~06)

**Files:**
- Create: `docs/requirements/NFR-01-performance.md`
- Create: `docs/requirements/NFR-02-theme.md`
- Create: `docs/requirements/NFR-03-platform.md`
- Create: `docs/requirements/NFR-04-keyboard.md`
- Create: `docs/requirements/NFR-05-precision.md`
- Create: `docs/requirements/NFR-06-error-message.md`

- [ ] **Step 1: NFR-01-performance.md 작성**

```markdown
# NFR-01: 성능 (계산 응답 시간)

## 설명
계산 결과는 사용자가 = 버튼을 누른 후 100ms 이내에 화면에 표시되어야 한다.

## 수용 기준
- [ ] 사칙연산 결과가 100ms 이내에 표시된다
- [ ] 공학 함수(sin, cos, tan, log, ln, √, x², xʸ) 결과가 100ms 이내에 표시된다
- [ ] 히스토리 항목이 20개 이상인 상태에서도 계산 응답 시간이 유지된다
```

- [ ] **Step 2: NFR-02-theme.md 작성**

```markdown
# NFR-02: 라이트 테마

## 설명
계산기 UI는 라이트 테마(밝은 배경, 선명한 색상)를 적용한다.

## 수용 기준
- [ ] 배경색은 흰색 또는 밝은 회색 계열을 사용한다
- [ ] 숫자 버튼, 연산자 버튼, 공학 함수 버튼이 색상으로 시각적으로 구분된다
- [ ] 텍스트는 어두운 색으로 배경과 충분한 명암 대비를 가진다
- [ ] 버튼 클릭 시 시각적 피드백(hover/active 상태)이 제공된다
```

- [ ] **Step 3: NFR-03-platform.md 작성**

```markdown
# NFR-03: 플랫폼 지원

## 설명
Electron 기반으로 개발하며 Windows, macOS, Linux 세 플랫폼을 지원한다.

## 수용 기준
- [ ] Windows 10 이상에서 정상 실행된다
- [ ] macOS 12 이상에서 정상 실행된다
- [ ] Ubuntu 20.04 이상(또는 동급 Linux)에서 정상 실행된다
- [ ] 각 플랫폼의 기본 창 크기/위치 규칙을 따른다
```

- [ ] **Step 4: NFR-04-keyboard.md 작성**

```markdown
# NFR-04: 키보드 입력 지원

## 설명
마우스 없이 키보드만으로 계산기의 모든 기본 기능을 사용할 수 있어야 한다.

## 수용 기준
- [ ] 숫자 키(0~9) 입력이 지원된다
- [ ] 소수점(.) 키 입력이 지원된다
- [ ] 사칙연산 키(+, -, *, /) 입력이 지원된다
- [ ] Enter 키가 = (계산 실행)으로 동작한다
- [ ] Backspace 키가 마지막 문자 삭제(FR-24)로 동작한다
- [ ] Escape 키가 AC (전체 초기화, FR-23)로 동작한다
```

- [ ] **Step 5: NFR-05-precision.md 작성**

```markdown
# NFR-05: 부동소수점 정밀도

## 설명
계산 결과의 부동소수점 오류를 최소화하고, 결과는 소수점 10자리 이내로 표시한다.

## 수용 기준
- [ ] 0.1 + 0.2 의 결과가 0.3으로 표시된다 (부동소수점 오류 처리)
- [ ] 결과값이 소수점 10자리를 초과하면 10자리에서 반올림하여 표시된다
- [ ] 매우 큰 수(1e15 이상) 또는 매우 작은 수(1e-10 이하)는 지수 표기법으로 표시된다
```

- [ ] **Step 6: NFR-06-error-message.md 작성**

```markdown
# NFR-06: 오류 메시지 표시

## 설명
잘못된 입력이나 계산 불가 상황에서 사용자에게 명확한 오류 메시지를 표시한다.

## 오류 유형 및 메시지

| 상황 | 오류 메시지 |
|------|------------|
| 0으로 나누기 (FR-04) | "오류: 0으로 나눌 수 없습니다" |
| 음수의 제곱근 (FR-10) | "오류: 음수의 제곱근은 계산할 수 없습니다" |
| 0 이하의 로그 (FR-08, FR-09) | "오류: 0 이하의 값은 로그를 계산할 수 없습니다" |
| tan 정의 불가 각도 (FR-07) | "오류: 정의되지 않는 값" |

## 수용 기준
- [ ] 각 오류 상황에서 위 표의 오류 메시지가 결과 영역에 표시된다
- [ ] 오류 메시지는 빨간색 또는 경고색으로 표시된다
- [ ] 오류 발생 후 AC(FR-23) 또는 Backspace(FR-24)로 정상 상태로 복귀할 수 있다
- [ ] 오류 발생 시 히스토리에는 기록되지 않는다
```

- [ ] **Step 7: 커밋**

```bash
git add docs/requirements/NFR-01-performance.md docs/requirements/NFR-02-theme.md docs/requirements/NFR-03-platform.md docs/requirements/NFR-04-keyboard.md docs/requirements/NFR-05-precision.md docs/requirements/NFR-06-error-message.md
git commit -m "docs: add non-functional requirements (NFR-01~06)"
```

---

## Task 9: 최종 검토

- [ ] **Step 1: 모든 요구사항 파일 생성 확인**

```bash
ls docs/requirements/ | wc -l
```
예상 출력: `30` (FR 24개 + NFR 6개)

- [ ] **Step 2: 파일 목록 확인**

```bash
ls docs/requirements/
```
예상 출력: FR-01~24, NFR-01~06 파일 30개

- [ ] **Step 3: 최종 커밋**

```bash
git add docs/requirements/
git commit -m "docs: complete all requirements documentation (FR-01~24, NFR-01~06)"
```

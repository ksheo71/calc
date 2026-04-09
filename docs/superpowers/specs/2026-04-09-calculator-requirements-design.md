# 공학용 계산기 요구사항 설계

**날짜:** 2026-04-09  
**프로젝트:** Electron 기반 공학용 계산기

---

## 개요

Electron으로 개발하는 데스크탑 공학용 계산기 앱. 기본 사칙연산과 공학 함수(삼각함수, 로그, 지수 등)를 제공하며, 계산 히스토리 재사용과 메모리 기능을 포함한다.

---

## 결정된 사항

| 항목 | 결정 |
|------|------|
| 기능 범위 | 기본 공학 기능 (삼각함수, 로그, 지수, 제곱근 등) |
| 레이아웃 | 통합형 (All-in-One) — 모든 버튼이 한 화면에 표시 |
| 테마 | 라이트 테마 (밝은 배경, 선명한 색상) |
| 각도 단위 | DEG/RAD 전환 버튼 제공 |
| 히스토리 | 이전 계산식+결과 목록 표시, 클릭 시 결과 재사용 |
| 메모리 | M+, M-, MR, MC |
| 요구사항 구조 | 평면 목록형 (FR/NFR 순차 번호) |
| 기술 스택 | Electron |

---

## 기능 요구사항 (FR)

| 번호 | 파일명 | 내용 |
|------|--------|------|
| FR-01 | FR-01-addition | 두 수의 덧셈 |
| FR-02 | FR-02-subtraction | 두 수의 뺄셈 |
| FR-03 | FR-03-multiplication | 두 수의 곱셈 |
| FR-04 | FR-04-division | 두 수의 나눗셈 (0 나누기 오류 포함) |
| FR-05 | FR-05-sin | sin 함수 계산 |
| FR-06 | FR-06-cos | cos 함수 계산 |
| FR-07 | FR-07-tan | tan 함수 계산 |
| FR-08 | FR-08-log | log₁₀ 함수 계산 |
| FR-09 | FR-09-ln | 자연로그(ln) 계산 |
| FR-10 | FR-10-sqrt | 제곱근(√) 계산 |
| FR-11 | FR-11-power-square | 제곱(x²) 계산 |
| FR-12 | FR-12-power-custom | 거듭제곱(xʸ) 계산 |
| FR-13 | FR-13-angle-mode | DEG/RAD 전환 버튼 |
| FR-14 | FR-14-history-display | 이전 계산식과 결과 목록 표시 |
| FR-15 | FR-15-history-reuse | 히스토리 항목 클릭 시 결과 재사용 |
| FR-16 | FR-16-history-clear | 히스토리 전체 삭제 |
| FR-17 | FR-17-memory-add | M+ (현재 값을 메모리에 더함) |
| FR-18 | FR-18-memory-subtract | M- (현재 값을 메모리에서 뺌) |
| FR-19 | FR-19-memory-recall | MR (메모리 값 불러오기) |
| FR-20 | FR-20-memory-clear | MC (메모리 초기화) |
| FR-21 | FR-21-display-expression | 입력 중인 수식을 화면에 표시 |
| FR-22 | FR-22-display-result | 계산 결과를 화면에 표시 |
| FR-23 | FR-23-clear | AC 버튼으로 전체 초기화 |
| FR-24 | FR-24-backspace | 마지막 입력 문자 삭제 |

---

## 비기능 요구사항 (NFR)

| 번호 | 파일명 | 내용 |
|------|--------|------|
| NFR-01 | NFR-01-performance | 계산 결과는 입력 후 100ms 이내 표시 |
| NFR-02 | NFR-02-theme | 라이트 테마 적용 (밝은 배경, 선명한 색상) |
| NFR-03 | NFR-03-platform | Electron 기반, Windows/macOS/Linux 지원 |
| NFR-04 | NFR-04-keyboard | 키보드 입력 지원 (숫자, 연산자, Enter, Backspace) |
| NFR-05 | NFR-05-precision | 부동소수점 정밀도 오류 최소화 (소수점 10자리 이내) |
| NFR-06 | NFR-06-error-message | 잘못된 입력(0 나누기, 음수 루트 등)에 명확한 오류 메시지 표시 |

---

## 요구사항 파일 저장 위치

`/docs/requirements/` — 각 요구사항을 개별 마크다운 파일로 저장  
파일명 형식: `{prefix}-{number}-{description}.md`  
예: `FR-01-addition.md`, `NFR-01-performance.md`

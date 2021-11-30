# Cowket Desktop Application

웹 소켓 채팅방 데스크탑 애플리케이션 구현

## UI Framework

[Elastic UI](https://elastic.github.io/eui/#/guidelines/getting-started)를 사용해서 개발합니다. 특징으로는 깔끔하고 주요 컴포넌트들을 제공하며 여러 유틸 서비스 및 테마를 커스텀할 수 있습니다. 한국어를 제공하지 않지만 문서가 깔끔하게 정리되어 있습니다.

### 스타일 모드

Elastic UI에서 제공하는 스타일을 기반으로 다크모드, 라이트모드를 사용합니다.

### 기타 스타일 관련 라이브러리

- styled-components를 사용하여 컴포넌트에 스타일을 입힙니다.

## 프로젝트 구조

컴포넌트 폴더의 구조는 [리액트 공식 문서](https://ko.reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes)에서 가이드하는 **파일 기능이나 라우트에 의한 분류**에 적힌 내용을 참고하여 설계합니다.

### 스타일 파일

스타일 파일을 따로 만들지 않고 컴포넌트 파일에 그대로 작성합니다. 글로벌로 사용될 스타일 파일의 경우 `renderer/styles` 폴더에 작성합니다.

### 테스트 파일

테스트 파일은 컴포넌트 파일의 위치와 동일한 위치에 작성합니다. (작성하지 않아도 됨)

### 커스텀 훅

여러 곳에서 사용될 수 있는 훅을 만들어 `renderer/hooks` 폴더에 작성합니다.

### API

API 호출 및 API 호출 라이브러리에 대한 설정을 `renderer/api` 폴더에 작성합니다.

## 상태 관리

[리코일](https://recoiljs.org/ko/docs/introduction/getting-started)을 한번도 사용해보지 않아서 이번 기회에 사용해보고 싶습니다. 더 좋은 상태 관리 라이브러리 있으시면 의견 남겨주세요. 일단은 프로젝트 세팅을 리코일 기준으로 세팅해놓겠습니다.

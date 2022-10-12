

컴포넌트 구조 :

▶ components => 
1. Header.jsx : 제일 윗부분인 "My Todo List", "React" 입니다.
2. Form.jsx : 제목과 내용입력 및 추가하기 버튼이 있는 Form입니다.
3. Layout.jsx : 전체화면의 넓이를 지정한 부분입니다.
4. List.jsx : "Working"과 "Done"이 나오는 부분입니다.

▶ pages =>
1. Todo.js : 
상세보기를 눌렀을 때 들어가지는 새창입니다.(react-router-dom)
filter로 상세보기를 눌렀을 때 그글의 id, title, content내용이 나오게 만들었습니다. 
2. TodoList.jsx : components폴더에 있는 모든 컴포넌트를 담았습니다.

▶ redux > config=> configStore.js

▶ redux > modules => todos.js : 모듈입니다.


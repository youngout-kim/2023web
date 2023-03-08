// HTML 요소 참조
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const deleteCompletedButton = document.querySelector('#delete-completed');

// 할 일 추가 함수
function addTodo() {
  // 입력된 할 일 내용 가져오기
  const todoText = input.value;

  // 새로운 할 일 요소 생성
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', updateTodoStatus);
  li.appendChild(checkbox);

  const span = document.createElement('span');
  span.innerText = todoText;
  span.addEventListener('dblclick', editTodo);
  li.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '삭제';
  deleteButton.addEventListener('click', deleteTodo);
  li.appendChild(deleteButton);

  // 새로운 할 일 요소를 목록에 추가
  ul.appendChild(li);

  // 입력 필드 초기화
  input.value = '';
}

// 할 일 상태 업데이트 함수
function updateTodoStatus(event) {
  const checkbox = event.target;
  const li = checkbox.parentNode;
  li.classList.toggle('completed');
}

// 할 일 수정 함수
function editTodo(event) {
  const span = event.target;
  const li = span.parentNode;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = span.innerText;
  input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      span.innerText = input.value;
      li.removeChild(input);
    }
  });
  li.insertBefore(input, span);
  li.removeChild(span);
  input.focus();
}

// 할 일 삭제 함수
function deleteTodo(event) {
  const li = event.target.parentNode;
  ul.removeChild(li);
}

// 추가 버튼 클릭 이벤트 처리
button.addEventListener("click", addTodo);

// 입력 필드 엔터키 이벤트 처리
input.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

// 완료한 일 삭제 버튼 클릭 이벤트 처리
deleteCompletedButton.addEventListener('click', function () {
  const completedTodos = ul.querySelectorAll('.completed');
  completedTodos.forEach(function (todo) {
    ul.removeChild(todo);
  });
});

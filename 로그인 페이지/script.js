// login.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  /* HTML 문서 안에서 <form> 태그를 찾아서 변수 form에 저장 */
  const usernameInput = document.querySelectorAll("input")[0];
  const passwordInput = document.querySelectorAll("input")[1];

  // ✅ 임의 아이디/비밀번호 설정
  const validUsername = "admin";
  const validPassword = "1234";

  form.addEventListener("submit", function (e) {
    /* 폼이 실행될 때 submit 함수를 실행. */
    e.preventDefault(); // 기본 제출 막기

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (
      enteredUsername === validUsername &&
      enteredPassword === validPassword
    ) {
      alert("✅ 로그인 성공!");
      // 예시: 로그인 후 다른 페이지로 이동
      window.location.href = "https://www.naver.com/";
    } else {
      alert("❌ 아이디 또는 비밀번호가 잘못되었습니다.");
    }
  });
});

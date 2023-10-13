document.addEventListener("DOMContentLoaded", function () {
    var characterSelect = document.getElementById("characterSelect");
    var chineseNameSpan = document.getElementById("chineseNameSpan");

    // JSON 파일 로드
    fetch("operators.json")
        .then(response => response.json())
        .then(data => {
            // JSON 데이터로 선택 박스 옵션 생성
            data.forEach(function (character) {
                var option = document.createElement("option");
                option.value = character.ID;
                option.textContent = character.중문;
                characterSelect.appendChild(option);
            });

            // 선택 변경 이벤트 리스너 추가
            characterSelect.addEventListener("change", function () {
                var selectedValue = this.value;
                var selectedCharacter = data.find(character => character.ID === selectedValue);
                if (selectedCharacter) {
                    chineseNameSpan.textContent = selectedCharacter.중문;
                } else {
                    chineseNameSpan.textContent = "";
                }
            });
        });
});

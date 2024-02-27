export class Keyboard {
    // # - hash: private 변수가 돼서 클래스 외부에서 읽히고 수정될 수 없음
    #swichEl;
    #fontSelectEl;

    constructor() {
        this.#assignElement();
        this.#addEvent();
    }

    #assignElement() {
        this.#swichEl = document.getElementById('switch');
        this.#fontSelectEl = document.getElementById('font');
    }

    #addEvent() {
        this.#swichEl.addEventListener("change", (event) => {
            document.documentElement.setAttribute(
                "theme",
                event.target.checked ? "dark-mode": ""
            )
            console.log(event.target.checked);
        });

        this.#fontSelectEl.addEventListener("change", (event) => {
            document.body.style.fontFamily = event.target.value;
            console.log(event.target.value);
        })
    }
}
export class Keyboard {
    // # - hash: private 변수가 돼서 클래스 외부에서 읽히고 수정될 수 없음
    #swichEl;
    #fontSelectEl;
    #containerEl;
    #keyboardEl;
    #inputGroupEl;
    #inputEl;

    constructor() {
        this.#assignElement();
        this.#addEvent();
    }

    #assignElement() {
        this.#containerEl = document.getElementById('container');
        this.#swichEl = this.#containerEl.querySelector('#switch');
        this.#fontSelectEl = this.#containerEl.querySelector('#font');
        this.#keyboardEl = this.#containerEl.querySelector('#keyboard');
        this.#inputGroupEl = this.#containerEl.querySelector('#input-group');
        this.#inputEl = this.#inputGroupEl.querySelector('#input');
    }

    #addEvent() {
        this.#swichEl.addEventListener("change", this.#onChangeTheme);
        this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
        document.addEventListener('keydown', this.#onKeyDown.bind(this));
        document.addEventListener('keyup', this.#onKeyUp.bind(this));
        this.#inputEl.addEventListener('input', this.#onInput);
    };

    #onInput(event) {
            this.#inputEl.value = this.#inputEl.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
    };

    #onKeyUp(event) {
            console.log('keyup');
            console.log(event.code);
            this.#keyboardEl
                .querySelector(`[data-code=${event.code}]`)
                ?.classList.remove('active');
    };

    #onKeyDown(event) {
            console.log('keydown');
            console.log(event.code);
            
            this.#inputGroupEl.classList.toggle('error', /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));

            this.#keyboardEl
                .querySelector(`[data-code=${event.code}]`)
                ?.classList.add('active');
    };

    #onChangeTheme(event) {
        document.documentElement.setAttribute(
            "theme",
            event.target.checked ? "dark-mode": ""
        )
    }

    #onChangeFont(event) {
        document.body.style.fontFamily = event.target.value;
        console.log(event.target.value);
    }
}
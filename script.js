
const keyboardInit = (localIndex) => {
  const keyLayouts = {
    index: false,
    eng: [
      { text: '`', code: 192 }, { text: '1', code: 49 }, { text: '2', code: 50 }, { text: '3', code: 51 },
      { text: '4', code: 52 }, { text: '5', code: 53 }, { text: '6', code: 54 }, { text: '7', code: 56 },
      { text: '8', code: 57 }, { text: '9', code: 58 }, { text: '0', code: 48 }, { text: '-', code: 189 },
      { text: '=', code: 187 }, { text: 'Backspace', code: 8 },
      { text: 'Tab', code: 9 }, { text: 'q', code: 81 }, { text: 'w', code: 87 }, { text: 'e', code: 69 },
      { text: 'r', code: 82 }, { text: 't', code: 84 }, { text: 'y', code: 89 }, { text: 'u', code: 85 },
      { text: 'i', code: 73 }, { text: 'o', code: 79 }, { text: 'p', code: 80 }, { text: '[', code: 219 },
      { text: ']', code: 221 }, { text: '\\', code: 220 }, { text: 'Delete', code: 46 },
      { text: 'CapsLock', code: 20 }, { text: 'a', code: 65 }, { text: 's', code: 83 }, { text: 'd', code: 66 },
      { text: 'f', code: 70 }, { text: 'g', code: 71 }, { text: 'h', code: 72 }, { text: 'j', code: 74 },
      { text: 'k', code: 75 }, { text: 'l', code: 76 }, { text: ';', code: 186 }, { text: "'", code: 222 },
      { text: 'Enter', code: 13 },
      { text: 'ShiftLeft', code: 16 }, { text: 'z', code: 90 }, { text: 'x', code: 88 }, { text: 'c', code: 67 },
      { text: 'v', code: 86 }, { text: 'b', code: 66 }, { text: 'n', code: 78 }, { text: 'm', code: 77 },
      { text: ',', code: 188 }, { text: '.', code: 190 }, { text: '/', code: 191 }, { text: 'ArrowUp', code: 38 },
      { text: 'ShiftRight', code: 16 },
      { text: 'ControlLeft', code: 17 }, { text: 'MetaLeft', code: 91 }, { text: 'AltLeft', code: 18 },
      { text: 'Space', code: 32 }, { text: 'AltRight', code: 18 }, { text: 'ControlRight', code: 17 },
      { text: 'ArrowLeft', code: 37 }, { text: 'ArrowDown', code: 40 }, { text: 'ArrowRight', code: 39 },
    ],

    rus: [
      { text: 'ё', code: 192 }, { text: '1', code: 49 }, { text: '2', code: 50 }, { text: '3', code: 51 },
      { text: '4', code: 52 }, { text: '5', code: 53 }, { text: '6', code: 54 }, { text: '7', code: 56 },
      { text: '8', code: 57 }, { text: '9', code: 58 }, { text: '0', code: 48 }, { text: '-', code: 189 },
      { text: '=', code: 187 }, { text: 'Backspace', code: 8 },
      { text: 'Tab', code: 9 }, { text: 'й', code: 81 }, { text: 'ц', code: 87 }, { text: 'у', code: 69 },
      { text: 'к', code: 82 }, { text: 'е', code: 84 }, { text: 'н', code: 89 }, { text: 'г', code: 85 },
      { text: 'ш', code: 73 }, { text: 'щ', code: 79 }, { text: 'з', code: 80 }, { text: 'х', code: 219 },
      { text: 'ъ', code: 221 }, { text: '\\', code: 220 }, { text: 'Delete', code: 46 },
      { text: 'CapsLock', code: 20 }, { text: 'ф', code: 65 }, { text: 'ы', code: 83 }, { text: 'в', code: 66 },
      { text: 'а', code: 70 }, { text: 'п', code: 71 }, { text: 'р', code: 72 }, { text: 'о', code: 74 },
      { text: 'л', code: 75 }, { text: 'д', code: 76 }, { text: 'ж', code: 186 }, { text: 'э', code: 222 },
      { text: 'Enter', code: 13 },
      { text: 'ShiftLeft', code: 16 }, { text: 'я', code: 90 }, { text: 'ч', code: 88 }, { text: 'с', code: 67 },
      { text: 'м', code: 86 }, { text: 'и', code: 66 }, { text: 'т', code: 78 }, { text: 'ь', code: 77 },
      { text: 'б', code: 188 }, { text: 'ю', code: 190 }, { text: '/', code: 191 }, { text: 'ArrowUp', code: 38 },
      { text: 'ShiftRight', code: 16 },
      { text: 'ControlLeft', code: 17 }, { text: 'MetaLeft', code: 91 }, { text: 'AltLeft', code: 18 },
      { text: 'Space', code: 32 }, { text: 'AltRight', code: 18 }, { text: 'ControlRight', code: 17 },
      { text: 'ArrowLeft', code: 37 }, { text: 'ArrowDown', code: 40 }, { text: 'ArrowRight', code: 39 },
    ],
  };

  // Create main elements
  const wrapper = document.createElement('div');
  const main = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keysContainer = document.createElement('div');

  // Setup main elements
  main.classList.add('keyboard');
  textarea.classList.add('keyboard__text');
  textarea.autofocus = 'true';
  keysContainer.classList.add('keyboard__keys');

  // create keys
  const language = localIndex ? keyLayouts.rus : keyLayouts.eng;
  // eslint-disable-next-line
  keysContainer.appendChild(createKeys(language));

  const elementsKeys = keysContainer.querySelectorAll('.keyboard__key');
  // eslint-disable-next-line
  keysPress(elementsKeys);

  // console.error(Object.keys(keyLayouts.rus1))

  // Add to DOM
  main.appendChild(keysContainer);
  wrapper.appendChild(textarea);
  wrapper.appendChild(main);
  document.body.appendChild(wrapper);

  function createKeys(keyLayout) {
    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', 'Delete', 'Enter', 'ShiftRight'].indexOf(key.text) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      // Add styles and behavior for keys
      switch (key.text) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');
          keyElement.id = 'Backspace';
          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_tab');
          keyElement.id = 'Tab';
          break;

        case 'Delete':
          keyElement.textContent = 'DEL';
          keyElement.id = 'Delete';
          break;

        case 'CapsLock':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.id = 'CapsLock';
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');
          keyElement.id = 'Enter';
          break;

        case 'ShiftLeft':
          keyElement.textContent = 'Shift';
          keyElement.id = 'ShiftLeft';
          break;

        case 'ShiftRight':
          keyElement.textContent = 'Shift';
          keyElement.id = 'ShiftRight';
          break;

        case 'ControlLeft':
          keyElement.textContent = 'CTRL';
          keyElement.id = 'ControlLeft';
          break;

        case 'ControlRight':
          keyElement.textContent = 'CTRL';
          keyElement.id = 'ControlRight';
          break;

        case 'MetaLeft':
          keyElement.textContent = 'WIN';
          keyElement.id = 'MetaLeft';
          break;

        case 'AltLeft':
          keyElement.textContent = 'Alt';
          keyElement.id = 'AltLeft';
          break;

        case 'AltRight':
          keyElement.textContent = 'Alt';
          keyElement.id = 'AltRight';
          break;

        case 'Space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');
          keyElement.id = 'Space';
          break;

        case 'ArrowUp':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
          keyElement.id = 'ArrowUp';
          break;

        case 'ArrowLeft':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
          keyElement.id = 'ArrowLeft';
          break;
        case 'ArrowDown':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
          keyElement.id = 'ArrowDown';
          break;

        case 'ArrowRight':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
          keyElement.id = 'ArrowRight';
          break;

        default:
          keyElement.classList.add('keyboard__key');
          keyElement.textContent = key.text;
          keyElement.id = key.code;
          break;
      }

      // add keys to fragment
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  }

  function keyBehavior(key) {
    switch (key.textContent) {
      case 'backspace':
        return function backspace() {
          const currentPosition = textarea.selectionStart;
          const newTextarea = textarea.value.split('');
          textarea.value = newTextarea.slice(0, currentPosition - 1).join('') + newTextarea.slice(currentPosition, textarea.value.length).join('');
          textarea.selectionStart = currentPosition - 1;
          textarea.selectionEnd = currentPosition - 1;
          textarea.focus();
        };

      case 'keyboard_tab':
        return function tab() {
          textarea.value += '    ';
          textarea.focus();
        };

      case 'DEL':
        return function del() {
          const currentPosition = textarea.selectionStart;
          const newTextarea1 = textarea.value.split('');
          textarea.value = newTextarea1.slice(0, currentPosition).join('') + newTextarea1.slice(currentPosition + 1, textarea.value.length).join('');
          textarea.selectionStart = currentPosition;
          textarea.selectionEnd = currentPosition;

          textarea.focus();
        };

      case 'keyboard_capslock':
        return function caps() {
          // eslint-disable-next-line
          keysToUpperCase(key);
          textarea.focus();
        };

      case 'keyboard_return':
        return function enter() {
          textarea.value += '\n';
          textarea.focus();
        };

      case 'Shift':
        return function Shift() { textarea.focus(); };

      case 'CTRL':
        return function ctrl() { textarea.focus(); };

      case 'WIN':
        return function win() { textarea.focus(); };

      case 'Alt':
        return function alt() { textarea.focus(); };

      case 'space_bar':
        return function space() {
          textarea.value += ' ';
          textarea.focus();
        };
      case 'keyboard_arrow_up':
        return function up() {
          textarea.value += '↑';
          textarea.focus();
        };

      case 'keyboard_arrow_left':
        return function left() {
          textarea.value += '←';
          textarea.focus();
        };

      case 'keyboard_arrow_down':
        return function down() {
          textarea.value += '↓';
          textarea.focus();
        };

      case 'keyboard_arrow_right':
        return function right() {
          textarea.value += '→';
          textarea.focus();
        };

      default:
        return function print() {
          textarea.value += key.innerHTML;
          textarea.focus();
        };
    }
  }

  function keysPress(arrKey) {
    arrKey.forEach((el) => {
      el.addEventListener('click', keyBehavior(el));
    });

    document.addEventListener('keydown', (event) => {
    // event.preventDefault()

      arrKey.forEach((key) => {
        if (event.which.toString() === key.id || event.code === key.id) {
          key.classList.add('keyboard__key--press');
          if (key.id === 'CapsLock' || key.id === 'ShiftLeft' || key.id === 'ShiftRirht') {
            // eslint-disable-next-line
            keysToUpperCase(key, event);
          }
        }
      });

      const shift = [...arrKey[42].classList].some((el) => el === 'keyboard__key--press');
      const ctrl = [...arrKey[57].classList].some((el) => el === 'keyboard__key--press');

      if (shift && ctrl) {
        // eslint-disable-next-line
        keyChangeLang(localIndex);
      }
    });

    document.addEventListener('keyup', (event) => {
      arrKey.forEach((key) => {
        if (event.which.toString() === key.id || event.code === key.id) {
          key.classList.remove('keyboard__key--press');
          if (key.id === 'ShiftLeft' || key.id === 'ShiftRirht') {
            // eslint-disable-next-line
            keysToUpperCase(key, event);
          }
        }
      });
    });
  }

  function keysToUpperCase(key, event) {
    if (key.id === 'CapsLock') {
      key.classList.toggle('keyboard__key--active');
      const point = [...key.classList].some((cl) => cl === 'keyboard__key--active');

      elementsKeys.forEach((el) => {
        if (el.textContent.length === 1) {
          if (point) {
            // eslint-disable-next-line
            el.textContent = el.textContent.toUpperCase();
          } else {
            // eslint-disable-next-line
            el.textContent = el.textContent.toLowerCase();
          }
        }
      });
    }
    if (key.id === 'ShiftLeft' || key.id === 'ShifRight') {
      elementsKeys.forEach((el) => {
        if (el.textContent.length === 1) {
          if (event.type === 'keyup') {
            // eslint-disable-next-line
            el.textContent = el.textContent.toLowerCase();
          }
          if (event.type === 'keydown') {
            // eslint-disable-next-line
            el.textContent = el.textContent.toUpperCase();
          }
        }
      });
    }
  }

  function keyChangeLang(index) {
    if (index) {
      // eslint-disable-next-line
      localIndex = !index;
      elementsKeys.forEach((key) => {
        keyLayouts.eng.forEach((el) => {
          if (key.id === el.code.toString()) {
            // eslint-disable-next-line
            key.textContent = el.text;
          }
        });
      });
    } else {
      // eslint-disable-next-line
      localIndex = !index;
      elementsKeys.forEach((key) => {
        keyLayouts.rus.forEach((el) => {
          if (key.id === el.code.toString()) {
            // eslint-disable-next-line
            key.textContent = el.text;
          }
        });
      });
    }
    this.localStorage.setItem('index', localIndex);
  }
};

window.onload = function load() {
  const localIndex = this.localStorage.getItem('index') === 'true';
  keyboardInit(localIndex);
};

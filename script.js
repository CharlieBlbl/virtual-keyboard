window.onload = function () {
    keyboardInit()
}



const keyboardInit =() =>{
    // Create main elements
    let wrapper = document.createElement("div")
    let main = document.createElement("div")
    let textarea = document.createElement("textarea")
    let keysContainer = document.createElement("div")
    

    // Setup main elements    
    main.classList.add("keyboard");
    textarea.classList.add("keyboard__text")
    textarea.autofocus = 'true'
    keysContainer.classList.add("keyboard__keys")
    keysContainer.appendChild(_createKeys());
    
    let elementsKeys = keysContainer.querySelectorAll(".keyboard__key")
    

    // Add to DOM
    main.appendChild(keysContainer)
    wrapper.appendChild(textarea)
    wrapper.appendChild(main)
    document.body.appendChild(wrapper)


    function _createKeys () {
        const fragment = document.createDocumentFragment();
        const keyLayoutEng = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/\/", "Delete",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ".", ",", "/", "ArrowUp", "ShiftRight",
            "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight" 
        ]
        const keyLayoutEngApp = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "Q", "W", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/\/", "Delete",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
            "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ".", ",", "/", "ArrowUp", "ShiftRight",
            "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight" 
        ]
        let caps = false
        let keyLayout = ['']

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };
        if(caps){
            keyLayout = keyLayoutEngApp
        } else {
            keyLayout = keyLayoutEng
        }
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");


            //Add styles and behavior for keys
            switch (key) {
                case 'Backspace':
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        
                        currentPosition = textarea.selectionStart
                        let newTextarea = textarea.value.split('')
                        textarea.value = newTextarea.slice(0, currentPosition-1).join('') + newTextarea.slice(currentPosition,  textarea.value.length).join('')
                        textarea.selectionStart = textarea.selectionEnd = currentPosition - 1                          
                                                        
                        textarea.focus();
                    });

                    break;

                case "Tab":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_tab");
    
                    keyElement.addEventListener("click", () => {
                        textarea.value += '    '
                        textarea.focus();
                    });
    
                    break;  
                
                case "Delete":
                    keyElement.textContent = 'DEL'
        
                    keyElement.addEventListener("click", () => {
                        
                        currentPosition = textarea.selectionStart
                        let newTextarea = textarea.value.split('')
                        textarea.value = newTextarea.slice(0, currentPosition).join('') + newTextarea.slice(currentPosition+1,  textarea.value.length).join('')
                        textarea.selectionStart = textarea.selectionEnd = currentPosition 

                        textarea.focus();
                    });
        
                break;      

                case "CapsLock":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {                        
                        keyElement.classList.toggle("keyboard__key--active")
                        _keysToUpperCase(caps)
                        textarea.focus()
                    });

                break;


                case "Enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        textarea.value += '\n'
                        textarea.focus();
                    });

                break;
                
                case "ShiftLeft":
                    keyElement.textContent = 'Shift'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "ShiftRight":
                    keyElement.textContent = 'Shift'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "ControlLeft":
                    keyElement.textContent = 'CTRL'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "ControlRight":
                    keyElement.textContent = 'CTRL'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "MetaLeft":
                    keyElement.textContent = 'WIN'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "AltLeft":
                    keyElement.textContent = 'Alt'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "AltRight":
                    keyElement.textContent = 'Alt'
        
                    keyElement.addEventListener("click", () => {
                        textarea.focus();
                    });
        
                break;

                case "Space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        textarea.value += ' '
                        textarea.focus();
                    });

                    break;

                case "ArrowUp":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up");
    
                    keyElement.addEventListener("click", () => {
                        textarea.value += '↑'
                        textarea.focus();
                    });
    
                    break;    
                
                case "ArrowLeft":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
        
                    keyElement.addEventListener("click", () => {
                        textarea.value += '←'
                        textarea.focus();
                    });
                    break
                case "ArrowDown":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_down");
            
                    keyElement.addEventListener("click", () => {
                        textarea.value += '↓'
                        textarea.focus();
                    });
                    break 
                        
                case "ArrowRight":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
                
                    keyElement.addEventListener("click", () => {
                        textarea.value += '→'
                        textarea.focus();
                    });
                break  

                default: 
                    keyElement.classList.add("keyboard__key")          
                    keyElement.textContent = key    
                    keyElement.addEventListener("click", () => {
                        textarea.value += key
                        textarea.focus();
                    });

                break;
            }
            
            //Add keydown and keyup 

            document.addEventListener('keydown', event => {   
                console.error(event.code)          
                if (event.code === `Key${keyElement.textContent.toLocaleUpperCase()}`){
                    keyElement.classList.add('keyboard__key--press')
                }
                if (event.code === key) {keyElement.classList.add('keyboard__key--press')                    
                }
                if(event.code === "CapsLock" || event.code === "ShiftLeft" || event.code === "ShiftRight"){
                    
                } 
            })
            document.addEventListener('keyup', event => {
                if (event.code === `Key${keyElement.textContent.toLocaleUpperCase()}`){
                    keyElement.classList.remove('keyboard__key--press')
                }
                if (event.code === key) {
                    keyElement.classList.remove('keyboard__key--press')
                }
            })   
           


            // add keys to fragment
            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;

    } 

    function _keysToUpperCase (caps) {
        
        elementsKeys.forEach(key => {
            console.error(caps)            
            if (key.textContent.length === 1) {
                key.textContent.toUpperCase()                     
            }    
            caps = true                
        })
        
    }





}
    






window.onload = function () {    
    keyboardInit()
}



const keyboardInit =() =>{
    // let index = true
    const keyLayoutEng = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
        "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ".", ",", "/", "ArrowUp", "ShiftRight",
        "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight" 
    ]
    const keyLayoutRus = [
        "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
        "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Delete",
        "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
        "ShiftLeft", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "ArrowUp", "ShiftRight",
        "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight" 
    ]

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
    keysContainer.appendChild(_createKeys(_keyChangeLang()))
    
    
    let elementsKeys = keysContainer.querySelectorAll(".keyboard__key")
    _keysPress (elementsKeys)

    // Add to DOM
    main.appendChild(keysContainer)
    wrapper.appendChild(textarea)
    wrapper.appendChild(main)
    document.body.appendChild(wrapper)


    function _createKeys (keyLayout) {
        const fragment = document.createDocumentFragment();        

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");


            //Add styles and behavior for keys
            switch (key) {
                case 'Backspace':
                    keyElement.classList.add("keyboard__key--wide")
                    keyElement.innerHTML = createIconHTML("backspace")
                    keyElement.id = "Backspace"
                    break;

                case "Tab":
                    keyElement.classList.add("keyboard__key--wide")
                    keyElement.innerHTML = createIconHTML("keyboard_tab")
                    keyElement.id = "Tab"
                    break;  
                
                case "Delete":
                    keyElement.textContent = 'DEL'
                    keyElement.id = "Delete"
                break;      

                case "CapsLock":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable")
                    keyElement.innerHTML = createIconHTML("keyboard_capslock")
                    keyElement.id = "CapsLock"
                break;


                case "Enter":
                    keyElement.classList.add("keyboard__key--wide")
                    keyElement.innerHTML = createIconHTML("keyboard_return")
                    keyElement.id = "Enter"
                break;
                
                case "ShiftLeft":
                    keyElement.textContent = 'Shift'
                    keyElement.id = "ShiftLeft"
                break;

                case "ShiftRight":
                    keyElement.textContent = 'Shift'
                    keyElement.id = "ShiftRight"
                break;

                case "ControlLeft":
                    keyElement.textContent = 'CTRL'
                    keyElement.id = "ControlLeft"
                break;

                case "ControlRight":
                    keyElement.textContent = 'CTRL'
                    keyElement.id = "ControlRight"
                break;

                case "MetaLeft":
                    keyElement.textContent = 'WIN'
                    keyElement.id = "MetaLeft"
                break;

                case "AltLeft":
                    keyElement.textContent = 'Alt'
                    keyElement.id = "AltLeft"
                break;

                case "AltRight":
                    keyElement.textContent = 'Alt'
                    keyElement.id = "AltRight"
                break;

                case "Space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar")
                    keyElement.id = "Space"
                    break;

                case "ArrowUp":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up")
                    keyElement.id = "ArrowUp"
                    break;    
                
                case "ArrowLeft":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left")
                    keyElement.id = "ArrowLeft"
                    break
                case "ArrowDown":
                    keyElement.classList.add("keyboard__key");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_down")
                    keyElement.id = "ArrowDown"
                    break 
                        
                case "ArrowRight":
                    keyElement.classList.add("keyboard__key")
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_right")
                    keyElement.id = "ArrowRight"
                break  

                default: 
                    keyElement.classList.add("keyboard__key")          
                    keyElement.textContent = key  
                    keyElement.id = key
                break;
            }           


            // add keys to fragment
            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;

    }
    
    function _keyBehavior (key) {
            
                switch(key.textContent){
                    case 'backspace':                        
                       return function () { 
                        currentPosition = textarea.selectionStart
                        let newTextarea = textarea.value.split('')
                        textarea.value = newTextarea.slice(0, currentPosition-1).join('') + newTextarea.slice(currentPosition,  textarea.value.length).join('')
                        textarea.selectionStart = textarea.selectionEnd = currentPosition - 1                          
                        textarea.focus()
                        }

                    case "keyboard_tab":
                        return function () {
                        textarea.value += '    '
                        textarea.focus()
                        } 
                    
                    case "DEL":                        
                    return function () {currentPosition = textarea.selectionStart
                        let newTextarea1 = textarea.value.split('')
                        textarea.value = newTextarea1.slice(0, currentPosition).join('') + newTextarea1.slice(currentPosition+1,  textarea.value.length).join('')
                        textarea.selectionStart = textarea.selectionEnd = currentPosition 

                         textarea.focus()}      

                    case "keyboard_capslock":                      
                    return function () {                                            
                            _keysToUpperCase(key)
                            textarea.focus()}


                    case "keyboard_return":
                        return function () {textarea.value += '\n'
                        textarea.focus()}
                    
                    case "Shift":
                        return function () {textarea.focus()}                    

                    case "CTRL":
                        return function () {textarea.focus()}
                    
                    case "WIN":
                        return function () {textarea.focus()}

                    case "Alt":
                        return function () {textarea.focus()}

                    case "space_bar":
                        return function () {    textarea.value += ' '
                            textarea.focus()}
                    case "keyboard_arrow_up":
                        return function () {    textarea.value += '↑'
                            textarea.focus()}   
                    
                    case "keyboard_arrow_left":
                        return function () {   textarea.value += '←'
                            textarea.focus()}
                    
                    case "keyboard_arrow_down":
                        return function () {    textarea.value += '↓'
                            textarea.focus()}
                            
                    case "keyboard_arrow_right":
                        return function () {    textarea.value += '→'
                            textarea.focus()}                  

                    default:                  
                    return function () {    textarea.value += key.innerHTML
                            textarea.focus()}              
                }
            
    }

    function _keysPress (arrKey) {  
            
        arrKey.forEach(el => {
            el.addEventListener('click', _keyBehavior(el))
        })

        
        document.addEventListener('keydown', event =>{       
            // event.preventDefault()
            // console.error(event)
            let index = true
            arrKey.forEach(key =>{                                             
                if (event.key === key.id.toLocaleLowerCase() || event.code === key.id){
                    key.classList.add('keyboard__key--press')
                    if(key.id === "CapsLock" || key.id === "ShiftLeft" || key.id === "ShiftRirht"  ) {
                        _keysToUpperCase(key, event)                         
                    }
                    console.error(key.id)
                    if(key.id === "ShiftLeft" && key.id === "AltLeft"){
                        index = !index
                        
                    }
                }    
                
            })            
        })
    
        document.addEventListener('keyup', event =>{
            arrKey.forEach(key =>{
                if (event.key === key.id.toLocaleLowerCase() || event.code === key.id){
                    key.classList.remove('keyboard__key--press')
                    if(key.id === "ShiftLeft" || key.id === "ShiftRirht"  ) {
                        _keysToUpperCase(key, event)                        
                    }
                }
            })            
        })            
    }

    function _keysToUpperCase (key, event) {
        if(key.id === "CapsLock"){ 
            key.classList.toggle('keyboard__key--active') 
            let point = [...key.classList].some(cl => cl === "keyboard__key--active")                       
            elementsKeys.forEach(key => {          
                if (key.textContent.length === 1) {
                    if(point){
                        key.textContent = key.textContent.toUpperCase()
                    }else{
                        key.textContent = key.textContent.toLocaleLowerCase()
                    }                  
                }                           
            }) 
        }  
        if(key.id === "ShiftLeft" || key.id === "ShifRight"){ 
            elementsKeys.forEach(key => {          
                if (key.textContent.length === 1) {
                    if(event.type === 'keyup'){
                        key.textContent = key.textContent.toLowerCase()
                    }
                    if(event.type === 'keydown'){
                        key.textContent = key.textContent.toUpperCase()}                                     
                }                           
            }) 
        }

    }

    function _keyChangeLang (index){        
        if (index){
           return keyLayoutEng
        }else{
            return keyLayoutRus
        }
    }

}
    






let isPinResetting = false

        function inputAdd(number) {
            let input = document.querySelector("input[type='text']");
            if (input.value.length == 4) return;
            if (isPinResetting == true) return;
            input.value += number;
        }
        
        function backspace() {
            if (isPinResetting == true) return;
            let input = document.querySelector("input[type='text']");
            input.value = input.value.slice(0, -1);
        }
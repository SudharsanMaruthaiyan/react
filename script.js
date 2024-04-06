
let input = document.getElementById("i1")

        function display(num) {
            input.value += num
        }

        function calculate(){
            try{
                input.value=eval(input.value);
            }
            catch(err){
                alert("invaled")
            }
        }

        function clearr(){
            input.value=" "
        }
        function delet(){
            input.value=input.value.slice(0,-1);
        }
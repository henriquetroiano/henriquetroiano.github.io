export default function copy() {
  

    const buttonCopy = document.getElementById('copy');
    buttonCopy.addEventListener('click', function() {

        /* get input target value to copy */
        let target = document.getElementById("copiare");
        
        /* select the text from input's value */
        target.select();
        target.setSelectionRange(0, 99999); /*For mobile devices*/
        
        /* copy the text from input's value */
        document.execCommand("copy");
        
        /* Alert the copied text */
        alert("E-mail copiado: " + target.value);
    })

        
        
    
    
}
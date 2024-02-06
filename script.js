
const head1 = document.createElement("h1");
const text = document.createTextNode("Juan David Gonzalez Melizo.");
const result = document.createElement("p");


var textBox1 = document.createElement('input');
textBox1.setAttribute("type", "text");
var textBox2 = document.createElement('input');
textBox2.setAttribute("type", "text");
const add = document.createElement('button');
add.textContent = 'ADD!!';
var resultText = document.createTextNode("");


head1.appendChild(text);


document.body.appendChild(head1);
document.body.appendChild(textBox1);
document.body.appendChild(textBox2);
document.body.appendChild(add);


const centerText = () => {
    text.innerText = 'Center Text';
    head1.style.color = 'gray';
    head1.style.textAlign = 'center';
}
centerText();




const validate = (input) => {
    try {
        const value = parseInt(input.value);
        
        if (isNaN(value)){
            throw new Error("Please enter a Number.");
        }

        input.style.border = '';
        input.nextElementSibling.textContent = '';
    

        return value;

    } catch (error) {
        input.style.border = '5px solid red';
        const errorMsg = document.createElement('p');
        var innerMsg = document.createTextNode('');

        innerMsg.textContent = error.message;
        errorMsg.appendChild(innerMsg);
        document.body.appendChild(errorMsg);

        throw error;
    }
};



add.addEventListener('click', function() {
    try {
        const value1 = validate(textBox1);
        const value2 = validate(textBox2);

        const total = value1 + value2;

        resultText = total.toString();
        result.innerText = resultText;

        document.body.appendChild(result);
    }catch(error){

    }
    
});

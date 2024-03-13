const addBtn = document.querySelector(".add");
const input = document.querySelector(".inp-group");

function removeInput() {
    this.parentNode.remove(); // Removes the entire question when the delete button is clicked
}

function addInput() {
    const question = document.createElement("div");
    question.className = "question";

    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = "Enter your question";

    const plusWrapper = document.createElement("span");
    plusWrapper.className = "plus-wrapper";

    const plus = document.createElement("span");
    plus.className = "plus-sign";
    plus.innerHTML = "+";
    plusWrapper.appendChild(plus);
    plusWrapper.addEventListener("click", addOption);

    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";
    btn.addEventListener("click", removeInput);

    const options = document.createElement("div");
    options.className = "options";

    const option = createOption();

    question.appendChild(plusWrapper);
    question.appendChild(questionInput);
    question.appendChild(btn);
    question.appendChild(options);
    question.appendChild(option);

    input.appendChild(question);
}

function addOption() {
    const option = createOption();
    this.parentNode.querySelector(".options").appendChild(option);
}

function createOption() {
    const option = document.createElement("div");
    option.className = "option";
    
    const optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.placeholder = "Enter an option";
    
    const deleteOptionBtn = document.createElement("a");
    deleteOptionBtn.className = "delete-option";
    deleteOptionBtn.innerHTML = "&times";
    deleteOptionBtn.addEventListener("click", function() {
        this.parentNode.remove();
    });

    option.appendChild(optionInput);
    option.appendChild(deleteOptionBtn);

    return option;
}

addBtn.addEventListener("click", addInput);

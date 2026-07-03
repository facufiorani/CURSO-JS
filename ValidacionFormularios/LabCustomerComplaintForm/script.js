const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productoCode = document.getElementById('product-code');
const cantidad = document.getElementById('quantity');
const complaintInput = document.getElementById("complaint-description");
const solutionDescription = document.getElementById('solution-description');
const checkboxes = document.querySelectorAll('input[name="complaint"]');
const radios = document.querySelectorAll('input[name="solutions"]');
const form = document.getElementById('form');
const solutionGroup = document.getElementById('solutions-group');
const complaintGroup = document.getElementById('complaints-group');

function validateForm() {
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexOrderNo = /^2024\d{6}$/;
    const regexProductCode =/^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
    let fullNameFlag = false;
    let emailFlag = false;
    let orderNoFlag = false;
    let productCodeFlag = false;
    let cantidadFlag = false;
    let complaintGroupFlag = false;
    let solutionGroupFlag = false;
    let solutionFlag = false;
    let complaintFlag = false;
    if (fullNameInput.value.trim().length > 0) {
        fullNameFlag = true;
    }

    if (emailInput.value.trim().length > 0 && regexMail.test(emailInput.value.trim())) {
        emailFlag = true;
    }
    if (orderNo.value.trim().length > 0 && regexOrderNo.test(orderNo.value.trim())) {
        orderNoFlag = true;
    }
    if (productoCode.value.trim().length > 0 && regexProductCode.test(productoCode.value.trim())) {
        productCodeFlag = true;
    }
    if (Number.isInteger(Number(cantidad.value)) && Number(cantidad.value) > 0) {
        cantidadFlag = true;
    }
    if (Array.from(checkboxes).some(checkbox => checkbox.checked)) {
        complaintGroupFlag = true;
    }
    if (Array.from(radios).some(radio => radio.checked)) {
        solutionGroupFlag = true;
    }
    if (!Array.from(checkboxes).find((checkbox) => checkbox.checked && checkbox.value === "other",) || complaintInput.value.trim().length >= 20) {
    complaintFlag = true;
    }
    if (!Array.from(radios).find(radio => radio.checked && radio.value === 'other') ||solutionDescription.value.trim().length >= 20) {
        solutionFlag = true;
    }
    
    return {
        'full-name': fullNameFlag,
        'email': emailFlag,
        'order-no': orderNoFlag,
        'product-code': productCodeFlag,
        'quantity': cantidadFlag,
        'complaints-group': complaintGroupFlag,
        'solutions-group': solutionGroupFlag,
        'complaint-description': complaintFlag,
        'solution-description': solutionFlag
    };
}

function isValid(obj) {
    return Object.values(obj).every((value) => value === true);
}
fullNameInput.addEventListener('change', () => {
    const validationResult = validateForm();
    fullNameInput.style.borderColor =  (validationResult['full-name']) ? 'green' : 'red'
})
emailInput.addEventListener('change', () => {
    const validationResult = validateForm();
    emailInput.style.borderColor = validationResult["email"]
        ? "green"
        : "red";
})
orderNo.addEventListener('change', () => {
    const validationResult = validateForm();
    orderNo.style.borderColor = validationResult["order-no"]
        ? "green"
        : "red"
})
productoCode.addEventListener('change', () => {
    const validationResult = validateForm();
    productoCode.style.borderColor = validationResult["product-code"]
        ? "green"
        : "red";
})
cantidad.addEventListener('change', () => {
    const validationResult = validateForm();
    cantidad.style.borderColor = validationResult["quantity"]
        ? "green"
        : "red";
})
complaintInput.addEventListener('change', () => {
    const validationResult = validateForm();
    complaintInput.style.borderColor = validationResult["complaint-description"]
        ? "green"
        : "red";
})
solutionDescription.addEventListener('change', () => {
    const validationResult = validateForm();
    solutionDescription.style.borderColor = validationResult["solution-description"]
        ? "green"
        : "red";
})

checkboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
    const result = validateForm();
    complaintGroup.style.borderColor = result["complaints-group"]
        ? "green"
        : "red";
    });
});

radios.forEach((r) => {
    r.addEventListener("change", () => {
    const result = validateForm();
    solutionGroup.style.borderColor = result["solutions-group"]
        ? "green"
        : "red";
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validationResult = validateForm();
  const isFormValid = isValid(validationResult);
  if (!validationResult["full-name"]) fullNameInput.style.borderColor = "red";
  if (!validationResult["email"]) emailInput.style.borderColor = "red";
  if (!validationResult["order-no"]) orderNo.style.borderColor = "red";
  if (!validationResult["product-code"]) productoCode.style.borderColor = "red";
  if (!validationResult["quantity"]) cantidad.style.borderColor = "red";
  if (!validationResult["complaints-group"]) complaintGroup.style.borderColor = "red";
  if (!validationResult["complaint-description"])
    complaintInput.style.borderColor = "red";
  if (!validationResult["solutions-group"]) solutionGroup.style.borderColor = "red";
  if (!validationResult["solution-description"])
    solutionDescription.style.borderColor = "red";
});
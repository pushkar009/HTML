const usernames = ["Pushkar", "Pushkar309", "Pushkar009", ""];

const spinner = document.getElementById("spinner"),
    alert = document.getElementById("alert");

const updateUi = (value) => {
    console.log("value", value);
    spinner.classList.remove("visible");

    const usernameExists = usernames.some((u) => u === value);

    console.log("usernames", usernames);
    console.log("usernameExists", usernameExists);

    if (usernameExists) {
        alert.classList.add("visible");
    } else {
        alert.classList.remove("visible");
    }
};

const debounce = (callback, time) => {
    let interval;
    return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            callback.apply(null, args);
        }, time);
    };
}

const handleStartTyping = () => {
    spinner.classList.add("visible");
};

const handleChange = debounce((input) => {
    const { value } = input.target;

    updateUi(value);
}, 500);

let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Please Sign Up First";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
});

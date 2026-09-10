const sendNow = document.getElementById("announcement_send_now");
const date = document.getElementById("announcement_date");
const time = document.getElementById("announcement_time");
const form_submit = document.getElementById("form_submit");

function toggleDateTime() {
    date.disabled = sendNow.checked;
    time.disabled = sendNow.checked;
    date.required = !sendNow.checked;
    time.required = !sendNow.checked;
}

sendNow.addEventListener("change", toggleDateTime);
toggleDateTime();
//         <div id="get-subscribe"></div>
//         <div id="delete-account"></div>
//         <div id="change-password"></div>
const subscribe_open = document.querySelector('.subscribe-open');
const subscribeDiv = document.querySelector('#get-subscribe');
document.addEventListener("DOMContentLoaded", async () => {
    if (!subscribeDiv) {
        console.error("#get-subscribe element not found!");
        return;
    }
    try {
        const response = await fetch("../modal/subscribe.html");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        subscribeDiv.innerHTML = await response.text();
        const subscribe_close = subscribeDiv.querySelector('.subscribe-close');
        if (subscribe_close) {
            subscribe_close.addEventListener('click', () => {
                subscribeDiv.style.display = 'none';
            });
        } else {
            console.error(".subscribe-close element not found after loading HTML!");
        }
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
});
subscribe_open.addEventListener('click', () => {
    subscribeDiv.style.display = 'block';
});

const delete_account_open = document.querySelector('.delete-account-open');
const delete_accountDiv = document.querySelector('#delete-account');
document.addEventListener("DOMContentLoaded", async () => {
    if (!delete_accountDiv) {
        console.error("#delete-account element not found!");
        return;
    }
    try {
        const response = await fetch("../modal/delete.account.html");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        delete_accountDiv.innerHTML = await response.text();
        const delete_account_close = delete_accountDiv.querySelector('.delete-account-close');
        if (delete_account_close) {
            delete_account_close.addEventListener('click', () => {
                delete_accountDiv.style.display = 'none';
            });
        } else {
            console.error(".delete-account-close element not found after loading HTML!");
        }
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
});
delete_account_open.addEventListener('click', () => {
    delete_accountDiv.style.display = 'block';
});

const change_password_open = document.querySelector('.change-password-open');
const change_passwordDiv = document.querySelector('#change-password');
document.addEventListener("DOMContentLoaded", async () => {
    if (!change_passwordDiv) {
        console.error("#change-password element not found!");
        return;
    }
    try {
        const response = await fetch("../modal/change.password.html");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        change_passwordDiv.innerHTML = await response.text();
        const change_password_close = change_passwordDiv.querySelector('.change-password-close');
        if (change_password_close) {
            change_password_close.addEventListener('click', () => {
                change_passwordDiv.style.display = 'none';
            });
        } else {
            console.error(".change-password-close element not found after loading HTML!");
        }
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
});
change_password_open.addEventListener('click', () => {
    change_passwordDiv.style.display = 'block';
});

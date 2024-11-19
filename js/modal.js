const subscribe_open = document.querySelector('.subscribe-open');
const subscribeDiv = document.querySelector('#get-subscribe');
document.addEventListener("DOMContentLoaded", async () => {
    if (!subscribeDiv) {
        console.log("#get-subscribe element not found!");
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
            console.log(".subscribe-close element not found after loading HTML!");
        }
    } catch (error) {
        console.log("Error loading HTML:", error);
    }
});
if (subscribe_open) {
    subscribe_open.addEventListener('click', () => {
        subscribeDiv.style.display = 'block';
    });
}

const delete_account_open = document.querySelector('.delete-account-open');
const delete_accountDiv = document.querySelector('#delete-account');
document.addEventListener("DOMContentLoaded", async () => {
    if (!delete_accountDiv) {
        console.log("#delete-account element not found!");
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
            console.log(".delete-account-close element not found after loading HTML!");
        }
    } catch (error) {
        console.log("Error loading HTML:", error);
    }
});
if (delete_account_open) {
    delete_account_open.addEventListener('click', () => {
        delete_accountDiv.style.display = 'block';
    });
}

const change_password_open = document.querySelector('.change-password-open');
const change_passwordDiv = document.querySelector('#change-password');
document.addEventListener("DOMContentLoaded", async () => {
    if (!change_passwordDiv) {
        console.log("#change-password element not found!");
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
            console.log(".change-password-close element not found after loading HTML!");
        }
    } catch (error) {
        console.log("Error loading HTML:", error);
    }
});
if (change_password_open) {
    change_password_open.addEventListener('click', () => {
        change_passwordDiv.style.display = 'block';
    });
}


const auth_open = document.querySelector('#auth-open');
const authDiv = document.querySelector('#auth-modal-container');
document.addEventListener("DOMContentLoaded", async () => {
    if (!authDiv) {
        console.log("#auth-modal-container element not found!");
        return;
    }
    try {
        const response = await fetch("../modal/signup.html");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        authDiv.innerHTML = await response.text();
        const auth_close = authDiv.querySelector('.auth-close');
        if (auth_close) {
            auth_close.addEventListener('click', () => {
                authDiv.style.display = 'none';
            });
        } else {
            console.log(".auth-close element not found after loading HTML!");
        }
    } catch (error) {
        console.log("Error loading HTML:", error);
    }
});
if (auth_open) {
    auth_open.addEventListener('click', () => {
        authDiv.style.display = 'block';
    });
}

const navbar_open = document.querySelector('.navbar-mobile-menu');
const navbarDiv = document.querySelector('#navbar-mobile-modal');
document.addEventListener("DOMContentLoaded", async () => {
    if (!navbarDiv) {
        console.log("#navbar-mobile-modal element not found!");
        return;
    }
    try {
        const response = await fetch("../modal/navbar.html");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        navbarDiv.innerHTML = await response.text();
        const navbar_close = navbarDiv.querySelectorAll('.close-navbar-modal');
        if (navbar_close) {
            navbar_close.forEach((element) => {
                element.addEventListener('click', () => {
                    navbarDiv.style.display = 'none';
                });
            });
        } else {
            console.log(".navbar-close element not found after loading HTML!");
        }
    } catch (error) {
        console.log("Error loading HTML:", error);
    }
});
if (navbar_open) {
    navbar_open.addEventListener('click', () => {
        navbarDiv.style.display = 'block';
    });
}
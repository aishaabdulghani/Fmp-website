import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, push, set, ref, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA9dlBNhZgBz_fNbFZSt7fxI-0-tAIbXU8",
    authDomain: "fmp-website-8d131.firebaseapp.com",
    projectId: "fmp-website-8d131",
    storageBucket: "fmp-website-8d131.appspot.com",
    messagingSenderId: "205731487918",
    appId: "1:205731487918:web:468460b771ae1f7ca60d3f",
    measurementId: "G-0FQR3VLC4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Db = getDatabase()

//FIreBase Khtm//


window.addingValue = function () {
    var c_name = document.getElementById('contact_name').value;
    var c_email = document.getElementById('contact_email').value;
    var c_phone = document.getElementById('contact_phone').value;
    var c_message = document.getElementById('contact_message').value;
    if (c_name == '') {
        alert('Please Enter Name')
    } else if (c_email == '' || c_email.indexOf('@') == -1) {
        alert('Please Enter Email')
    } else if (c_phone.length != 11) {
        alert('Please Enter Correct Number')
    } else if (c_message.length < 5) {
        alert('Please Enter Proper Message')
    } else {
        var obj = {
            name: c_name,
            email: c_email,
            phone: c_phone,
            messgae: c_message,
        }
        var Userref = push(ref(Db, 'Contact/'))
        obj.id = Userref.key

        set(Userref, obj)
        document.getElementById('contact_name').value = '';
        document.getElementById('contact_email').value = '';
        document.getElementById('contact_phone').value = '';
        document.getElementById('contact_message').value = '';
    }
}

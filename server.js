// JavaScript Codes

$.get('https://ipinfo.io/json?token=b0d83fc879b35c', function(data) {
		console.log('Response', data);
		$("#city").html(data.city);
		$("#country").html(data.country);
		$("#ip").html(data.ip);
		$("#loc").html(data.loc);
		$("#org").html(data.org);
		$("#postal").html(data.postal);
		$("#region").html(data.region);
		$("#timezone").html(data.timezone);
	});


firstname = localStorage.getItem("firstname");
lastname = localStorage.getItem("lastname");
password = localStorage.getItem("password");

document.getElementById("name").innerHTML = firstname + "&nbsp;" + lastname;
document.getElementById("password").innerHTML = password;

city = data.city;

room_store = "IP-Address-Details";

var firebaseConfig = {
    apiKey: "AIzaSyD6alfnzTsI9q1GQLRVPI8MCC5swmBDq-U",
    authDomain: "meutsvideo-database.firebaseapp.com",
    databaseURL: "https://meutsvideo-database-default-rtdb.firebaseio.com",
    projectId: "meutsvideo-database",
    storageBucket: "meutsvideo-database.appspot.com",
    messagingSenderId: "820053553572",
    appId: "1:820053553572:web:a123e0a02908640efa9131"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {

    firebase.database().ref(room_store).push({
       	firstname: firstname,
       	lastname: lastname,
        city: city,
        // country: data.country,
        // ip: data.ip,
        // loc: data.loc,
        // internet: data.org,
        // postal: data.postal,
        // region: data.region,
        // timezone: data.timezone
    });
}

function getData() {
    firebase.database().ref("/" + room_store).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                // name = message_data['name'];
                // message = message_data['message'];

                // name_tag = "<h6 class='username_h4'><img class='user_tick' src='https://gyanam-ui.github.io/www.nestcoderpro.com/images/default-user.png'/> " + name + "</h6>";
                // message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                // row = name_tag + message_tag + "<br>";
                // document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();
var isRedy = true;

async function processRequest() {
    var button = document.getElementById('submitBtn');

    if(isRedy && button.innerHTML == 'Shorten URL') {
        isRedy = false;

        button.innerHTML = 'Processing';

        var textBox = document.getElementById("linkInput");
        var requestURL = "https://sapi.peico.xyz/api/add?url=" + textBox.value;

        console.log("GET " + requestURL);

        fetch(requestURL).then(function(response){
            response.text().then(function(data) {
                isRedy = true;
                button.innerHTML = 'Shorten URL';
                textBox.value = "peico.xyz/" + data;;
            });
            }).catch(function(error) {
                button.innerHTML = 'Error';
        });
    }
}

function openApp() {
    if(Math.random().toString(2).substr(2, 1) == 1) {
        window.open("https://play.google.com/store/apps/details?id=xyz.peico.app");
     } else {
        window.open("https://play.google.com/store/apps/details?id=appinventor.ai_bgpsdr.Peico");
     }
}

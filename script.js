
const form_data = document.getElementsByClassName("contact-form")[0];

form_data.addEventListener("submit", function(event){

    event.preventDefault(); /* 送信ボタンでページ遷移を止める */

    const formData = new FormData(form_data);

    const data = new URLSearchParams(formData);

    fetch("https://script.google.com/macros/s/AKfycbwo5MdKGblwa101LxcPlZVxtDv9pr09NjZUXVBcMBZJtOIEAHtK-V6bn1qJWfxQP3tkqA/exec", {
        method: "POST",
        body: data
    })
    .then(response => {
        console.log("レスポンス取得", response);
        return response.text();
    })
    .then(result => {
        console.log("GASからの回答", result);
    })
    .catch(error => {
        console.error("通信エラー", error)
    })

});





function showTip() {
    var tips = [
        "اشرب 8 أكواب ماء يوميًا",
        "نم من 7 إلى 8 ساعات",
        "مارس الرياضة 30 دقيقة يوميًا",
        "قلل من تناول السكر",
        "تناول الفواكه والخضروات يوميًا"
    ];

    var randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerHTML = tips[randomIndex];
}
function sendMessage() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var phoneNumber = "967774771742";

    var text = "الاسم: " + name + "%0A" + "الرسالة: " + message;

    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + text;

    window.open(whatsappURL, "_blank");
}
function generateQR() {
    var whatsappNumber = $('#whatsappNumber').val();
    var message = $('#message').val();
    var whatsappLink = 'https://wa.me/' + whatsappNumber;
    
    // If a message is provided, append it to the WhatsApp link
    if (message) {
        whatsappLink += '?text=' + encodeURIComponent(message);
    }

    var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(whatsappLink) + '&size=200x200';

    $('#qrCodeContainer').html('<img src="' + qrUrl + '" alt="WhatsApp QR Code">');
}


import qrcode

def generate_qr_code(diagnosis_data):
    try:
        # Extract the data to be encoded into the QR code
        qr_data = "http://localhost:5173/details/" + diagnosis_data['id']

        # Create a QR code instance
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(qr_data)
        qr.make(fit=True)

        # Generate the QR code image
        qr_img = qr.make_image(fill_color="black", back_color="white")

        # Define the path to save the QR code image
        qr_code_path = "public/qr/" + diagnosis_data['id'] + ".png"

        # Save the QR code image to the specified path
        qr_img.save(qr_code_path)

        return qr_code_path
    except Exception as e:
        print("An error occurred while generating QR code:", e)
        return None

<?php 

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$instrument = $_POST['instrument'];
	$contact_message = isset( $_POST['message'] ) ? $_POST['message'] : '-';

	// Cambiar por  contacto@sunland.mx
	$to = 'miguel@pcuervo.com';
	$subject = 'Informes acerca de clases particulares';
	$headers = 'From: Sunland School of Arts <contacto@sunland.mx>' . "\r\n";
	$headers .= "Reply-To: contacto@sunland.mx\r\n";
	$headers .= "Return-Path: contacto@sunland.mx\r\n";
	$headers .= "CC: contacto@sunland.mx\r\n";
	$headers .= "BCC: contacto@sunland.mx\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = '<html><body>';
	$message .= '<p>'.$name.' ha solicitado informes clases de ' . $instrument . '</p>';
	$message .= '<p>Email: '. $email . '</p>';
	$message .= '<p>Teléfono: '. $phone . '</p>';
	if( $contact_message != '' ) $message .= '<p>Mensaje: '. $contact_message . '</p>';
	$message .= '</body></html>';

	mail($to, $subject, $message, $headers );

	$message = array(
		'error'		=> 0,
		'name'	=> $name,
		);
	echo json_encode($message , JSON_FORCE_OBJECT);


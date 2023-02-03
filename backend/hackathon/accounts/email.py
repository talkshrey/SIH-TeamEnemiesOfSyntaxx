from django.core.mail import EmailMessage

class send_email:
	@staticmethod
	def send_email(data):
		email = EmailMessage(subject = data['subject'], body = data['email_body'], to = [data['to']])
		email.attach_file(data['attachments'])
		email.send()
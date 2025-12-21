class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    @full_name = contact.full_name
    
    # Update this email address to the recipient email
    subject_line = contact.subject.present? ? "New Contact Form Submission: #{contact.subject}" : "New Contact Form Submission from #{@full_name}"
    mail(
      to: ENV.fetch('CONTACT_EMAIL', 'eric.deb7@gmail.com'),
      from: ENV.fetch('CONTACT_FROM_EMAIL', 'eric.deb7@gmail.com'),
      subject: subject_line
    )
  end
end


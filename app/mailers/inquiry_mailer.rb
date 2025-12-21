class InquiryMailer < ApplicationMailer
  def inquiry_email(inquiry)
    @inquiry = inquiry
    @full_name = inquiry.full_name
    
    mail(
      to: ENV.fetch('CONTACT_EMAIL', 'eric.deb7@gmail.com'),
      from: ENV.fetch('CONTACT_FROM_EMAIL', 'eric.deb7@gmail.com'),
      subject: "New Inquiry from #{@full_name}"
    )
  end
end


class ApplicationMailer < ActionMailer::Base
  default from: ENV.fetch('CONTACT_FROM_EMAIL', 'noreply@kentstormanstherapy.com')
  layout "mailer"
end

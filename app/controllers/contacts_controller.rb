class ContactsController < ApplicationController
  protect_from_forgery with: :null_session, only: [:create]
  
  def create
    @contact = ContactForm.new(contact_params)
    
    if @contact.valid?
      begin
        ContactMailer.contact_email(@contact).deliver_now
        render json: { status: 'success', message: 'Thank you for your message. I will get back to you as soon as possible.' }, status: :ok
      rescue => e
        Rails.logger.error "Failed to send contact email: #{e.message}"
        render json: { status: 'error', errors: ['There was an error sending your message. Please try again later.'] }, status: :internal_server_error
      end
    else
      render json: { status: 'error', errors: @contact.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:firstName, :lastName, :nameYouGoBy, :dateOfBirth, :email, :phone, :gender, :state, :subject, :message)
  end
end


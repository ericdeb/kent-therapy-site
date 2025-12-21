class InquiriesController < ApplicationController
  protect_from_forgery with: :null_session, only: [:create]
  
  def create
    @inquiry = InquiryForm.new(inquiry_params)
    
    if @inquiry.valid?
      begin
        InquiryMailer.inquiry_email(@inquiry).deliver_now
        render json: { status: 'success', message: 'Thank you for your message. I will get back to you as soon as possible.' }, status: :ok
      rescue => e
        Rails.logger.error "Failed to send inquiry email: #{e.message}"
        render json: { status: 'error', errors: ['There was an error sending your message. Please try again later.'] }, status: :internal_server_error
      end
    else
      render json: { status: 'error', errors: @inquiry.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def inquiry_params
    params.require(:inquiry).permit(:firstName, :lastName, :email, :phone, :preferredContactMethod, :message)
  end
end


class ContactForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :firstName, :string
  attribute :lastName, :string
  attribute :nameYouGoBy, :string
  attribute :dateOfBirth, :string
  attribute :email, :string
  attribute :phone, :string
  attribute :gender, :string
  attribute :preferredContactMethod, :string
  attribute :state, :string
  attribute :subject, :string
  attribute :message, :string

  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :dateOfBirth, presence: true
  validates :phone, presence: true
  validates :state, presence: true
  # subject and message are optional for the modal form

  def full_name
    "#{firstName} #{lastName}".strip
  end
end


class ContactForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :firstName, :string
  attribute :lastName, :string
  attribute :email, :string
  attribute :subject, :string
  attribute :message, :string

  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :subject, presence: true
  validates :message, presence: true

  def full_name
    "#{firstName} #{lastName}".strip
  end
end


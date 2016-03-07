class Pub
  include Mongoid::Document

  field :name, type: String
  field :latitude, type: Hash
  field :details, type: Hash
end

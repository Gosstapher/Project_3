class Pub
  include Mongoid::Document

  field :name, type: String
  field :location, type: Hash
  field :details, type: Hash
end

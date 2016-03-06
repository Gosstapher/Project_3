json.array!(@pubs) do |pub|
  json.extract! pub, :id, :name, :location, :details
  json.url pub_url(pub, format: :json)
end

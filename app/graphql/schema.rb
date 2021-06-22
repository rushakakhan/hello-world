# typed: false
# frozen_string_literal: true

class Schema < GraphQL::Schema
  query(Types::QueryType)

  def self.dump
    schema_path = Pathname.new(__dir__).join("schema.graphql")
    schema_path.write(to_definition)
    Rails.logger.info("Updated GraphQL schema dump: #{schema_path}")
    true
  end

  def self.refresh
    %x(yarn sewing-kit refresh-graphql)
    Rails.logger.info("Refreshed GraphQL schema types.")
    true
  end
end

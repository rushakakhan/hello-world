# typed: false
# frozen_string_literal: true

namespace :graphql do
  namespace :schema do
    desc "Dump the GraphQL Schema"
    task dump: :environment do
      Schema.dump
    end
  end
end

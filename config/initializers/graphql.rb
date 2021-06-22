# typed: false
# frozen_string_literal: true

graphql_path = Rails.root.join("app/graphql").to_s

reloader = ActiveSupport::FileUpdateChecker.new([], { graphql_path => "rb" }) do
  Schema.dump && Schema.refresh
end

Rails.application.reloaders << reloader

Rails.application.reloader.to_run do
  reloader.execute_if_updated
end

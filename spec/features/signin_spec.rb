require "rails_helper"

DatabaseCleaner.strategy = :truncation


describe "the signin process", :type => :feature do
  before :each do
    User.create(:email => 'user@example.com', :password => 'password123')
  end

  it "signs me in" do
    visit '/login'
    within("#new_user") do
      fill_in 'user_email', :with => 'user@example.com'
      fill_in 'user_password', :with => 'password'
    end
    click_button 'Log in'
    expect(page).to have_content 'Success'
  end
end

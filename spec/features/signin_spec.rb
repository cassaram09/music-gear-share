require "rails_helper"

DatabaseCleaner.strategy = :truncation


describe "the signin process", :type => :feature do
  before :each do
    DatabaseCleaner.clean
    User.create(:email => 'user@example.com', :password => 'password123')
  end

  it "signs me in" do
    visit '/login'
    fill_in 'Email', :with => 'user@example.com'
    fill_in 'Password', :with => 'password123'
    click_button 'Log in'
    expect(page).to have_content 'Home'
  end
end

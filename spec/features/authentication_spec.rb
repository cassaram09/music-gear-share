require "rails_helper"

DatabaseCleaner.strategy = :truncation

describe "Authentication", :type => :feature do

  before :each do
    DatabaseCleaner.clean
  end

  it "Signs users up" do
    visit '/signup'
    fill_in 'Email', :with => 'user@example.com'
    fill_in 'Password', :with => 'password123'
    fill_in 'Password confirmation', :with => 'password123'
    click_button 'Sign up'
    expect(page).to have_content 'Home'
    user = User.find_by(email: "user@example.com")
    expect(user.email).to eq("user@example.com")
  end

  it "Logs users in" do
    User.create(:email => 'user@example.com', :password => 'password123')
    visit '/login'
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'Password', :with => 'password123'
    click_button 'Log in'
    expect(page).to have_content 'Home'
  end

  it "Logs users out" do
    User.create(:email => 'user@example.com', :password => 'password123')
    visit '/login'
      fill_in 'Email', :with => 'user@example.com'
      fill_in 'Password', :with => 'password123'
    click_button 'Log in'
    expect(page).to have_content 'Home'
    click_link 'Log Out'
    expect(page).to have_current_path(root_path)
  end

end

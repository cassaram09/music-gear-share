[ X ] Must use an Angular Front-End that includes at least 5 pages
  - Gear
  - Profile
  - My Gear
    - Add Gear
  - Messages
    - Sent Messages
    - Received Messages

[ X ] Must contain some sort of nested views
  - Sent and Received Messages are nested views under Messages. 

[ X ] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
  - Filter gear by name, category or description 

[ X ] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
  - User can add and update their gear (name, description, category, rental fee)

[ X ] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product

[ X ] Data should be validated in Angular before submission
  - ng-messages for form validations when creating or editing gear. 

[ X ] Must talk to the Rails backend using $http and Services.
  - Uses $http, GearService, and UserService
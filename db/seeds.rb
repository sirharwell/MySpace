20.times do
  Dude.create(
    name: Faker::FamilyGuy.character,
    city: Faker::ElderScrolls.region,
    pic: Faker::Avatar.image,
    age: Faker::Number.number(2),
    job: Faker::Commerce.department,
  )
end

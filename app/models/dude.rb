class Dude < ApplicationRecord



  serialize :liked_dudes, Array

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Dude.where("id IN (?)", ids)
  end

  def self.random_dude(ids)
    ids = ids.empty? ? [0] : ids
    Dude.where("id NOT IN (?)", ids).order("RANDOM()")
  end

end

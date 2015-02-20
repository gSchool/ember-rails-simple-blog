# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Post.create(title: "Using Ember With Rails", username: "BradySTI", link: "https://www.airpair.com/ember.js/posts/top-mistakes-ember-rails", description: "useful stuff.  Can be headache :(")
# Post.create(title: "Making A Reddit Clone", username: "NinaSmile", link: "http://ruby.about.com/od/redditclone/", description: "tutorial on making a reddit clone with rails!")

Comment.create(username: "Martha123", post_id: 1, body: "This is so helpful, thanks BradySTI!" )
Comment.create(username: "JohnBirthdayBoyxxx", post_id: 1, body: "Everyone sing to me!!!" )
Comment.create(username: "Momo", post_id: 2, body: "woof woof i love leaves haha" )
Comment.create(username: "Colt", post_id: 2, body: "Don't copy my code!" )

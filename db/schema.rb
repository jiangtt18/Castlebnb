# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180410080146) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "castle_images", force: :cascade do |t|
    t.integer "castle_id", null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["castle_id"], name: "index_castle_images_on_castle_id"
  end

  create_table "castles", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.string "discription", null: false
    t.boolean "is_AV_Equipment"
    t.boolean "is_ampleParking"
    t.boolean "is_carriage"
    t.boolean "is_wifi"
    t.boolean "is_oceanView"
    t.boolean "is_gardenView"
    t.integer "price", null: false
    t.integer "bed_room", null: false
    t.integer "bath_room", null: false
    t.integer "num_guests", null: false
    t.integer "bath", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "zip_code", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["city"], name: "index_castles_on_city"
    t.index ["country"], name: "index_castles_on_country"
    t.index ["state"], name: "index_castles_on_state"
    t.index ["street_address"], name: "index_castles_on_street_address", unique: true
    t.index ["zip_code"], name: "index_castles_on_zip_code"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "castle_id", null: false
    t.integer "reviewer_id", null: false
    t.string "comment", default: "", null: false
    t.integer "accuracy", null: false
    t.integer "communication", null: false
    t.integer "location", null: false
    t.integer "value", null: false
    t.integer "checkin", null: false
    t.integer "num_reviewers"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cleanliness", null: false
    t.index ["castle_id"], name: "index_reviews_on_castle_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstname", default: "", null: false
    t.string "lastname", default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

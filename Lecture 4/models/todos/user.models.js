import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],  // if password emty give custome massage :-password is required
    },
  },
  { timestamps: true }  // createAt updated At (time batave) always pass as secondry object
)

export const User = mongoose.model("User", userSchema)

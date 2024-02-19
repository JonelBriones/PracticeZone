import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username cannot be blank"],
      minLength: [3, "Username must be at least 3 characters long "],
      maxLength: [20, "Username max length reached"],
    },
    password: {
      type: String,
      required: [true, "Password cannot be blank"],
      minLength: [5, "Password must be at least 5 characters long "],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});
UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = model("User", UserSchema);

export default User;

/* 
validate: {
  validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
  message: "Please enter a valid email"
}

*/

import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
    //getting details from user
    const { fullname, email, username, password, } = req.body;
    if (
        [fullname,email,username,password].some((field)=> field.trim() === "")
    ) {
        throw new ApiError(400, "All fields required");
    } 
    const existedUser = User.findOne({
        $or: [{ username }, { email }]
        
    })
    if (existedUser) {
        throw new ApiError(409,"User already exists")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.avatar[0]?.path;
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar image is required");
    }

    const avatar = await uploadCloudinary(avatarLocalPath)
    const coverImage = await uploadCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar is required")
    }
    const user = await User.create({
        fullname,
        email,
        username : username.toLowerCase(),
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        password,
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken",
    )
    if (!createdUser) {
        throw new ApiError(500,"Something went wrong while creating the user")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
    //validation
    //check if already exist
    //cehck for image and avatar
    //upload on cloudinary, avatar
    //create user object - create entry in db
    // remove password and refresh token fireld from response
    // check for user creation
    // if yes return res
    // else return error

    console.log("Email: ",email);
    
})

export {registerUser}
import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import { getTokenFromHeader } from '../utils/getTokenFromHeader.js'
import { verifyToken } from '../utils/verifyToken.js'

// @desc     Register user
// @route    POST /api/v1/users/register
// @access   Private/Admin

export const registerUserCtrl = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body
  // check user exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    //throw
    throw new Error('User already exists')
  }
  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  // create user
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  })
  res.status(201).json({
    status: 'success',
    message: 'User Registered Successfully',
    data: user,
  })
})

// @desc     Login User
// @route    POST /api/v1/users/login
// @access   public

export const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const userFound = await User.findOne({
    email,
  })
  if (userFound && (await bcrypt.compare(password, userFound?.password))) {
    res.json({
      status: 'Success',
      message: 'User logged in Sucessfully',
      userFound,
      token: generateToken(userFound?._id),
    })
  } else {
    throw new Error('Invalid login credentials')
  }
})

// @desc     Get user profile
// @route    GET /api/v1/users/profile
// @access   Private

export const getUserProfileCtrl = asyncHandler(async (req, res) => {
  const token = getTokenFromHeader(req)
  // verify token
  const verified = verifyToken(token)
  console.log(req)
  res.json({
    msg: 'welcome Profile page',
  })
})

// @desc    Update user shipping address
// @route   PUT /api/v1/users/update/shipping
// @access  Private

export const updateShippingAddresctrl = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    city,
    postalCode,
    province,
    phone,
    country,
  } = req.body
  const user = await User.findByIdAndUpdate(
    req.userAuthId,
    {
      shippingAddress: {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        province,
        phone,
        country,
      },
      hasShippingAddress: true,
    },
    {
      new: true,
    }
  )
  //send response
  res.json({
    status: 'success',
    message: 'User shipping address updated successfully',
    user,
  })
})

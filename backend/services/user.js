import User from "../Modal/index.js"

const getAllUsers = async () => {
  return await User.find({})
    
}

export { getAllUsers }
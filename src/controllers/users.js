import userModel from '../models/users.js';


const getAlluser = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send({ message: "all user fetched", users })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "faild due to technical issues" })
    }
}

const getUserByid = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        if (user) {
            res.status(200).send({ message: "user id fetched", user })
        } else {
            res.status(400).send({ message: "invalid user id" })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            await userModel.create(req.body)
            res.status(200).send({ message: "user created succcessfully" })
        } else {
            res.status(409).send({ message: `user with ${req.body.email} already exist` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "error data not fetching" })
    }

}


const editUserByid = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);

        if (user) {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            await user.save();
            res.status(200).send({ message: "user details updated successfully" });
        } else {
            res.status(400).send({ message: "user not found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "internal server error", error: error.message });
    }
};




const deleteUserByid = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        if (user) {
            await userModel.deleteOne({ _id: id })
            res.status(200).send({ message: "user deleted" })
        } else {
            res.status(400).send({ message: "invalid user id" })
        }
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}


export default {
    getAlluser,
    getUserByid,
    createUser,
    editUserByid,
    deleteUserByid
}


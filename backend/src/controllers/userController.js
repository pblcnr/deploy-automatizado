import User from "../models/userModel.js";

export const create = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};

export const findAll = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

export const update = async (req, res) => {
    const { id } = req.params;
    await User.update(req.body, { where: { id } });
    const user = await User.findByPk(id);
    res.json(user);
}

export const remove = async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.json({ deleted: true });
}

export const getUsers = `SELECT * FROM users`;

export const getUserByIdQuery = `SELECT * FROM users where id=$1`;

export const createNewUser = `INSERT INTO users (user_name, email, user_type) VALUES ($1,$2,$3) RETURNING id`;

export const updateUser = `UPDATE public.users
SET  user_name=$2, email=$3, user_type=$4
WHERE id=$1 RETURNING *;`;

export const deleteUserById = `DELETE FROM users where id = $1 RETURNING id`;
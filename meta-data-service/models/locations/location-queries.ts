export const getAllLocationQuery: string = `SELECT * FROM location`;

export const insertLocationQuery: string = `INSERT INTO location
(building_id, floor, room_num, entry)
 VALUES ($1, $2, $3, $4)
 RETURNING id`;

export const deleteLocationQuery: string = `DELETE FROM location WHERE id = $1 `;

export const updateLocationQuery = `UPDATE location SET 
building_id = $2, floor = $3, room_num = $4, entry = $5
WHERE id = $1 RETURNING *` 

export const getLocationByIdQuery = `SELECT * FROM location WHERE id = $1`

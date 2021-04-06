module.exports = class Favorite {
    id;
    userName;
    favoriteJoke;

    constructor(row) {
        this.id = row.id;
        this.userName = row.user_name;
        this.favoriteJoke = row.favorite_jokes;
    }

    static async insert({ userName, favoriteJoke }) {
        const {
        rows,
        } = await pool.query(
        `INSERT INTO favorites (user_name, favorite_jokes) VALUES ($1, $2) RETURNING *`,
        [userName, favoriteJoke]
        );

    return new Favorite(rows[0]);
    }

    // static async find() {
    //     const { rows } = await pool.query('SELECT * FROM favorites');

    //     return rows.map((row) => new Favorite(row));
    // }
};
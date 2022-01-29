const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./HB_app_user.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log('Connection successful');
});

class Database{

  readDatabase (cell, data) {
    let sql = 'SELECT cell FROM user_profile';

    const result = db.run(sql, [data], (err) => {
      if (err) return console.error(err.message);

      console.log('Read from database');
    })

    db.close((err) => {
      if (err) return console.error(err.message);
    })

    return (result);
  }

  updateDatabase (cell, data) {
    let sql = 'UPDATE user_profile SET cell = ?';

    db.run(sql, [data], function (err) {
      if (err) return console.error(err.message);

      console.log('Updated database');
    })

    db.close((err) => {
      if (err) return console.error(err.message);
    })
  }
}





// db.run(
//   'CREATE TABLE user_profile(title, first_name, last_name, home_address, mobile_number, home_number, work_number, email_address)'
// )

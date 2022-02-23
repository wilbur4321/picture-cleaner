// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { } from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();

export default function handler(req, res) {
  let db = new sqlite3.Database('../../pic-work-small/db.sqlite', (err) => {
    if (err) {
      res.status(500).json({ error: err });
      return
    }
  });
  db.serialize(() => {
    db.each(`select count(*) cnt from fingerprints`, (err, row) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.status(200).json({ count: row.cnt });
    });
  });
  db.close()
  // TODO: THIS IS WRONG! We get the following error!
  // API resolved without sending a response for /api/test1, this may result in stalled requests.
}

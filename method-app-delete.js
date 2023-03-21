
import express from 'express';
const app = express();

const records = [
  { id: 1, name: 'Record 1' },
  { id: 2, name: 'Record 2' },
  { id: 3, name: 'Record 3' },
  { id: 4, name: 'Record 4' },
  { id: 5, name: 'Record 5' },
  { id: 6, name: 'Record 6' }
];

app.get('/',(req, res)=>{
  res.send(records)
})

app.delete('/records/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = records.findIndex(record => record.id === id);

  records.splice(index, 1);
  console.log('Updated data is ',records);
  return res.send('Record deleted successfully');

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

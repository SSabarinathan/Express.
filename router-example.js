import express from 'express';

const router= express();

const items = ('./router/products')



router.get('/',(req, res)=>{
  res.send('You are in Home page!!')
});
router.use('/items', items)

router.listen(3000)















//










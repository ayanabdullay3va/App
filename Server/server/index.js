const express = require('express')
const app = express()
const cord = require("cors")
const bodyParser = require('body-parser')
const port =  3000
app.use(bodyParser.json())
app.use(cord())

let arr=[{
  id:1,
  name:"The Weeknd",
  age:30,
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8xGmtC3a2kBAFaveZ7wer3Gqzg-gnSAnqO6-fEoh&s"
},
{
  id:2,
  name:"Beyonce",
  age:50,
  image:"https://ca-times.brightspotcdn.com/dims4/default/c60d70d/2147483647/strip/true/crop/3840x5760+0+0/resize/1200x1800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F82%2F49%2Fcc0096ef48bb9e4233dd9337acde%2Fbeyonce.jpg"
},
{
  id:3,
  name:"Ariana Grande",
  age:30,
  image:"https://hips.hearstapps.com/hmg-prod/images/ariana…nde_photo_jon_kopaloff_getty_images_465687098.jpg"
},{
  id:4,
  name:"Jenifer Lopez",
  age:54,
  image:"	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…meVV/UaRXvQeAIBiNuxm9IT1rKNe7OY+zNZX3qtPDkKx2Z//Z"
}]
app.get('/singer', (req, res) => {
  res.send(arr)
})
app.get("/singer:id", (req, res) => {
  const id = req.params.id;
  const elemById = arr.find((elem) => elem.id == id);
  res.send(elemById);
});
app.delete("/singer:id", (req, res) => {
 let newSinger=arr.filter ((x)=>x.id!==req.params.id)
 
  res.send(newSinger);
});
app.post("/singer", (req, res) => {
  const elem = req.body;
    arr.push(elem);
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
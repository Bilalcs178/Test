
import React, { useEffect, useState } from 'react'
import GetData from "./Apis/Test"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  const [data, setData] = useState([]);



  useEffect(() => {
    const response = GetData.TestApi();
    console.log(response)
    response.then(value => {
      if (value) {
        console.log(value)
        setData(value.data.results);
        console.log(value.data.results)

      }

      //   setLoading(false);
    })
  }, [])
  return (
    <>
      {data.map((index) => {
        return (

          <div class="card w-25" >
            <img class="card-img-top w-100" src={index.picture.large} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{index.name.first}</h5>
              <h6>{index.email}</h6>
              <p>Cell no {index.cell}</p>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Contact them</a>
            </div>
          </div>
        )
      })}
    </>
  )
}

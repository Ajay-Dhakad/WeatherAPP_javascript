



const btn = document.getElementById('srcbtn')

const inputval = document.querySelector('#search')
const humidity = document.querySelector(".humidity")
const cloud  = document.querySelector('.cloud')
const wind = document.querySelector('.wind')


let getdata =async (location) => {



let fetch1 = await fetch(`https://api.weatherapi.com/v1/current.json?key=23d182faeb3844f593b161013230311&q=${location}&aqi=yes`)

let arr = await fetch1.json()



let array = []

array.push(arr);

if (fetch1.ok){

return array;
}

return null






}



// weather('mandsaur')


let showweather =async (city) => {

    let arr = await getdata(`${city}`)

  

    // console.log(arr)
    // console.log(cityname)
    // console.log(temperature)
    // console.log(cloudstatus)
    // console.log(humidity)
    // console.log(WindSpeed)

    if (arr) {

    let details = [{

        cityname : arr[0].location.name +','+  arr[0].location.country,
        temperature : arr[0].current.temp_c+'<sup>o</sup>C',
 cloud :  arr[0].current.cloud,
 humidity : arr[0].current.humidity,
 WindSpeed : arr[0].current.wind_mph

    }]

    // console.log(details)

  

return details
    }

    return null

}

// showweather()

btn.addEventListener('click', async () => {

   
    var cityname = inputval.value
    




    let data = await showweather(cityname)
    


    if (data){
    

    inputval.value = ''

    localStorage.setItem('city',cityname)


    let temp = document.querySelector('.temperature')
    let city = document.querySelector('.cityname')


    temp.append = data[0].temperature
    city.textContent = data[0].cityname
    humidity.textContent = 'Humidity :' + data[0].humidity
    cloud.textContent = 'Cloud :'+ data[0].cloud
    wind.textContent = 'Wind Speed M/hr :'+ data[0].WindSpeed


    }

    else{



        var error = document.querySelector('.error')

        error.style.display = 'block'

        setTimeout( () => {

             error.style.display = 'none'

        },2000)

            



        

        

        

    }

   

    
   
    
    

})


let defaultweather =async () => {


    let cityname = localStorage.getItem('city')

    if (cityname){

        var data = await showweather(cityname)



    }

    else {

        
        var data = await showweather('mandsaur')



    }
    



    inputval.value = ''


    let temp = document.querySelector('.temperature')
    let city = document.querySelector('.cityname')


    temp.append = data[0].temperature
    city.textContent = data[0].cityname
    humidity.textContent = 'Humidity :' + data[0].humidity
    cloud.textContent = 'Cloud :'+ data[0].cloud
    wind.textContent = 'Wind Speed M/hr :'+ data[0].WindSpeed


}


defaultweather()


